const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authController = {
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password

      // Create a new user instance
      const newUser = new User({
        name,
        email,
        password: password,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // console.log(user); // Dump data to console

      // Check password
      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token });
    } catch (error) {
      console.log(req.body); // Dump data to console
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async logoutUser(req, res) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (token) {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({ message: "Logout successful" });
    } else {
      res.status(400).json({ message: "No token provided" });
    }
  },

  authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },

  async accessProtectedRoute(req, res) {
    try {
      // Fetch user data from the database based on user ID attached to request object
      const user = await User.findById(req.user.userId); // Assuming userId is stored in the token
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json({
        message: "Accessed protected route successfully",
        user: user, // Return user data
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = authController;
