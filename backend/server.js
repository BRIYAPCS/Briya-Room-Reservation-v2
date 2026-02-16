import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import os from "os";
import process from "process";

import { testDatabaseConnection } from "./config/db.js";
import { verifyDatabaseOnStartup } from "./config/db.js";

// Load environment variables
dotenv.config();

// ============================================================
// Initialize Express App
// ============================================================

const app = express();

// ============================================================
// Global Middleware
// ============================================================

// Enable CORS (can restrict later using process.env.CORS_ORIGIN)
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*"
}));

// Parse JSON bodies
app.use(express.json({ limit: process.env.BODY_LIMIT || "1mb" }));

// Trust proxy if behind Nginx
if (process.env.TRUST_PROXY === "true") {
  app.set("trust proxy", 1);
}

// ============================================================
// BASIC HEALTH CHECK (Liveness Probe)
// ============================================================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Briya Room Reservation API",
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// ============================================================
// DETAILED HEALTH CHECK (Readiness Probe)
// ============================================================
// This is useful for:
// - Future load balancers
// - Monitoring systems
// - Production checks

app.get("/api/health/detailed", async (req, res) => {
  try {
    const memoryUsage = process.memoryUsage();
    const cpuLoad = os.loadavg();
    const freeMemoryMB = Math.round(os.freemem() / 1024 / 1024);
    const totalMemoryMB = Math.round(os.totalmem() / 1024 / 1024);

    let dbStatus = "OK";

    try {
      await testDatabaseConnection();
    } catch (dbError) {
      dbStatus = "DISCONNECTED";
    }

    res.status(200).json({
      status: "OK",
      service: "Briya Room Reservation API",
      environment: process.env.NODE_ENV || "development",
      uptime_seconds: process.uptime(),
      database: dbStatus,
      system: {
        platform: os.platform(),
        cpu_load: cpuLoad,
        free_memory_mb: freeMemoryMB,
        total_memory_mb: totalMemoryMB
      },
      memory: {
        rss: memoryUsage.rss,
        heapTotal: memoryUsage.heapTotal,
        heapUsed: memoryUsage.heapUsed
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Detailed health check failed",
      error: error.message
    });
  }
});

// ============================================================
// ROOT ROUTE
// ============================================================

app.get("/", (req, res) => {
  res.json({
    message: "Briya Room Reservation API",
    version: "1.0.0"
  });
});

// ============================================================
// 404 HANDLER
// ============================================================

app.use((req, res) => {
  res.status(404).json({
    status: "Not Found",
    message: "Endpoint does not exist"
  });
});

// ============================================================
// GLOBAL ERROR HANDLER
// ============================================================

app.use((err, req, res, next) => {
  console.error("❌ Unhandled Error:", err);

  res.status(500).json({
    status: "ERROR",
    message: "Internal Server Error"
  });
});

// ============================================================
// START SERVER
// ============================================================

const PORT = process.env.PORT || 5050;

const server = app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);

  // Verify DB connection on startup
  await verifyDatabaseOnStartup();
});

// ============================================================
// GRACEFUL SHUTDOWN HANDLING
// Prevents corrupted state or hanging processes
// ============================================================

process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("🔒 Server closed.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("🔒 Server closed.");
    process.exit(0);
  });
});