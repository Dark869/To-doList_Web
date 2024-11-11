import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Start server
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});