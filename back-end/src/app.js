const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// Route imports
const tourScheduleRouter = require("./tours/tourSchedule.router");
const toursRouter = require("./tours/tours.router");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.json({
    message: '🚀 VinaGroup Tours API is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use("/api/tourschedule", tourScheduleRouter);
app.use("/api/tours", toursRouter);

// Error handlers (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;