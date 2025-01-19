const express = require("express");
const router = express.Router();
const ChatLog = require("../models/ChatLog");

// Create a new chat log
router.post("/", async (req, res) => {
  try {
    const chatLog = new ChatLog(req.body);
    await chatLog.save();
    res.status(201).json(chatLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all chat logs for a user
router.get("/:userId", async (req, res) => {
  try {
    const chatLogs = await ChatLog.find({ user: req.params.userId });
    res.json(chatLogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
