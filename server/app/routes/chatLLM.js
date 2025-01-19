const express = require("express");
const router = express.Router();
const ChatLog = require("../models/ChatLog");
const { pipeline } = require("@huggingface/transformers");


// Initialize the Hugging Face pipeline once when the server starts
let generator;
(async () => {
  try {
    console.log("Downloading the model...");
    generator = await pipeline("text-generation", "onnx-community/Llama-3.2-1B-Instruct");
    console.log("Model downloaded successfully.");
  } catch (error) {
    console.error("Error downloading the model:", error);
  }
})();

// Endpoint to get all chat logs and generate a response using an open-source LLM
router.post("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    const message = req.body.message;
    console.log("Request received for llm")

    if (!generator) {
      return res.status(500).json({ error: "Model not initialized yet. Please try again later." });
    }

    // Fetch all chat logs for the user
    const chatLogs = await ChatLog.find({ userId });

    // Prepare the prompt with the chat logs and the new message
    let prompt = "You are an AI assistant that is helpful, creative, clever, and very friendly.\n\n Please only answer with a single text response from the bot side. Do not continue past your response. Chat history:\n";
    chatLogs.forEach(log => {
      prompt += `User: ${log.message}\n`;
      prompt += `Bot: ${log.response}\n`;
    });
    prompt += `User: ${message}\nBot:`;


    // Generate a response using the Hugging Face pipeline
    const response = await generator(prompt, { max_length: 150 });
    const botResponse = response[0].generated_text.split('Bot:')[1].trim();

    // Save the new chat log with the bot's response
    const newChatLog = new ChatLog({
      user: userId,
      message: message,
      response: botResponse
    });
    await newChatLog.save();

    res.status(201).json(newChatLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;