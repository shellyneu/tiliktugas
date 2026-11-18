
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not configured.");
}

export const gemini = new GoogleGenAI({
  apiKey,
  httpOptions: {
    retryOptions: {
      attempts: 3,
      initialDelay: 1,
      maxDelay: 8,
      expBase: 2,
      jitter: 1,
      httpStatusCodes: [408, 429, 500, 502, 503, 504],
    },
  },
});

export const GEMINI_MODEL =
  process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
