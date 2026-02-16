import express from "express";

const router = express.Router();

// TEMP test endpoint
router.get("/", (req, res) => {
  res.json({ message: "Reservations route working" });
});

export default router;