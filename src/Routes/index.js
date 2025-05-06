const express = require("express");
const router = express.Router();
const userRoutes  = require("./user.routes.js");

router.get("/", (req, res) => {
  res.send("Welcome to the home page of the Sagun API's");
});

router.use("/user", userRoutes);

module.exports = router;
