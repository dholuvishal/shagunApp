const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
  } catch (err) {
    console.error(`Database connection failed: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
