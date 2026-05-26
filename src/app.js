const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const ApiResponse = require("./utils/ApiResponse");

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://axis-fe-ten.vercel.app","https://www.axissupport.help","https://www.axiscreditsupport.in"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const applicationRoutes = require("./routes/applicationRoutes");

app.use("/api/v1/applications", applicationRoutes);

// Initial Test Route
app.get("/api/v1/test", (req, res) => {
  res.status(200).json(
    new ApiResponse(200, { message: "API is working properly" }, "Success")
  );
});

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
