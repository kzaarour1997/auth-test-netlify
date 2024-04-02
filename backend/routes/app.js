const express = require("express");
const bodyParser = require("body-parser");

const authController = require("../controllers/authController");

const app = express();
const cors = require("cors");
app.use(cors());
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Register a new user
app.post("/register", authController.registerUser);

// Login route
app.post("/login", authController.loginUser);

// Logout route
app.post("/logout", authController.logoutUser);

app.get(
  "/",
  authController.authenticateToken,
  authController.accessProtectedRoute
);

module.exports = app;
