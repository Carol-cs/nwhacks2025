const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const protect = require("../middleware/authMiddleware");

const SALT_ROUNDS = 10;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already in use
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    const token = generateToken(user._id);

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // TODO
      sameSite: "Strict",
      maxAge: 3600000,
    });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000,
    });

    res.json({ message: "Login successful" });
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
