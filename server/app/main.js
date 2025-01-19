const express = require("express");
const app = express();
var cors = require("cors");
var dotenv = require("dotenv");
var cookieParser = require("cookie-parser");

dotenv.config();

var connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/chatlogs", require("./routes/chatLog"));
app.use("/api/healthinfos", require("./routes/healthInfo"));

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:3000");
});
