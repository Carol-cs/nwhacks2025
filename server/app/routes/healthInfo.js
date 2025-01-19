const express = require("express");
const router = express.Router();
const HealthInfo = require("../models/HealthInfo");

// Create a new health info
router.post("/", async (req, res) => {
  try {
    const healthInfo = new HealthInfo(req.body);
    await healthInfo.save();
    res.status(201).json(healthInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all health info for a user
router.get("/:userId", async (req, res) => {
  try {
    const healthInfos = await HealthInfo.find({ user: req.params.userId });
    res.json(healthInfos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
