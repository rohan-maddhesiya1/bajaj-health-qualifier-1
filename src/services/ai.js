import axios from "axios";
import { ENV } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const getAIResponse = async (question) => {
  if (typeof question !== "string" || question.trim().length === 0) {
    throw new ApiError(422, "AI input must be a non-empty string");
  }

  const prompt = `
Answer the following question in exactly ONE WORD.
No punctuation. No explanation.

Question: ${question}
`;

  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${ENV.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    const text =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("AI response invalid");
    }

    // Force one-word output
    return text.trim().split(/\s+/)[0];
  } catch (err) {
    console.error("AI Error:", err.response?.data || err.message);
    throw new Error("AI service failed");
  }
};
