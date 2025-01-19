const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const protect = require("../middleware/authMiddleware");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const user = new User({ email });
    await user.save();

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const token = generateToken(user._id);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

module.exports = router;
