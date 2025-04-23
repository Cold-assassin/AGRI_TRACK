const groqResponse = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "mixtral-8x7b-32768",
      messages: [
        { role: "system", content: "You are a helpful assistant that extracts agriculture-related info." },
        { role: "user", content: groqPrompt }
      ],
      temperature: 0.2
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );
  