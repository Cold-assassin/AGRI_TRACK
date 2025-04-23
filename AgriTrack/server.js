require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/groq", async (req, res) => {
  const userPrompt = req.body.prompt;

  // 🟢 Define Groq Prompt as a string properly
  const groqPrompt = `
You are an agricultural assistant. 

If the user's message contains details about planting crops and the number of acres, 
extract that info and respond ONLY in this JSON format:
{
  "crop": "<crop name>",
  "acres": <number of acres>,
  "message": "<friendly summary like: You're planting wheat on 5 acres.>"
}

If the user is asking a general agricultural question in any language (English or Hinglish),
like "How to grow sugarcane?" or "Sarkari yojna kisano ke liye", DO NOT return JSON.
Instead, respond with a helpful, friendly, and natural language answer.

User's message: "${userPrompt}"
`;

  try {
    console.log("📤 Prompt sent to Groq:", groqPrompt);

    const groqResponse = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that extracts agriculture-related information like crop names and acreage, or answers general agriculture queries."
          },
          {
            role: "user",
            content: groqPrompt
          }
        ],
        temperature: 0.2
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const aiResponse = groqResponse.data.choices[0].message.content.trim();
    const cleanedResponse = aiResponse.replace(/```json|```/g, "").trim();

    console.log("✅ Response from Groq:", cleanedResponse);

    let structuredResponse;
    try {
      structuredResponse = JSON.parse(cleanedResponse);
    } catch (jsonError) {
      structuredResponse = { message: cleanedResponse };
    }

    res.json(structuredResponse);
  } catch (error) {
    console.error("❌ Error communicating with Groq:", error.response?.data || error.message);
    res.status(500).json({ error: "Groq AI failed to respond correctly." });
  }
});

app.post("/mock-fluvio", (req, res) => {
  console.log("💬 Simulated Fluvio Event:", req.body.message);
  res.json({ status: "Simulated OK" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
