process.loadEnvFile();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./Configs/connectDB.js");
const routes = require("./Routes/index.js");
const cors = require("cors");
const setupSwagger = require("./Configs/swaggerConfig"); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use('/get',express.static(path.join(__dirname,"/Uploads")));
setupSwagger(app);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server.`);
  err.status = "Fail to load..";
  err.statusCode = 404;
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  return res.status(error.statusCode).json({
    success: false,
    statusCode: error.statusCode,
    message: error.message || "Oops! Something went wrong.",
    data: null,
  });
});

app.listen(process.env.PORT || 8080, "0.0.0.0", async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    console.log(
      `Connected to DB and server is running on port ${
        process.env.PORT || 8080
      }`
    );
  } catch (error) {
    console.error("Error connecting to the database: ", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
});
