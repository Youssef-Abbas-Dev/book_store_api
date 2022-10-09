const express = require("express");
const logger = require("./middlewares/logger");
const { notFound, errorHanlder } = require("./middlewares/errors");
require("dotenv").config();
const connectToDB = require("./config/db");

// Connection To Database
connectToDB();

// Init App
const app = express();

// Apply Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/books", require("./routes/books"));
app.use("/api/authors", require("./routes/authors"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

// Error Hanlder Middleware
app.use(notFound);
app.use(errorHanlder);

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
