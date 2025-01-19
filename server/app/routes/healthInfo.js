const express = require("express");
const router = express.Router();
const HealthInfo = require("../models/HealthInfo");
const protect = require("../middleware/authMiddleware");

// Create a new health info
router.post("/", protect, async (req, res) => {
  try {
    const healthInfo = new HealthInfo({ ...req.body, user: req.userId });
    await healthInfo.save();
    res.status(201).json(healthInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all health info for a user
router.get("/", protect, async (req, res) => {
  try {
    const healthInfos = await HealthInfo.find({ user: req.userId });
    res.json(healthInfos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update health info
router.put("/:id", protect, async (req, res) => {
  try {
    const healthInfo = await HealthInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(healthInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete health info
router.delete("/:id", protect, async (req, res) => {
  try {
    const healthInfo = await HealthInfo.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
