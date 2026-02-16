import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import reservationsRoutes from "./routes/reservationsRoutes.js";

dotenv.config();

const app = express();

// ===============================
// Global Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Health Check
// ===============================
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Briya Room Reservation API is running",
    timestamp: new Date().toISOString()
  });
});

// ===============================
// Routes
// ===============================
app.use("/api/reservations", reservationsRoutes);

export default app;