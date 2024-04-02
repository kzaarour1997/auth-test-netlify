const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./backend/routes/app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection is successful"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
