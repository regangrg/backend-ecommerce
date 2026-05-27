import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Environment variables
const port = process.env.PORT || 5000;
const dataBaseUrl = process.env.DATABASE_URL;

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", router);

// Database connection
mongoose
  .connect(dataBaseUrl)
  .then(() => {
    console.log("Connected to database");

    // Start server only after DB connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.log(error.message);
  });