import express from "express";
import { chat, toServerSentEventsStream } from "@tanstack/ai";
import { geminiText } from "@tanstack/ai-gemini";
import { Readable } from "stream";
import { env } from "../lib/env.js";
import { SYSTEM_PROMPT } from "../lib/systemPrompt.js";

const router = express.Router();

export const chatRoute = async (req, res) => {
  if (!env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: "GEMINI_API_KEY not configured",
    });
  }

  const { messages, conversationId } = req.body;

  try {
    const stream = chat({
      adapter: geminiText("gemini-2.5-flash-lite"),
      systemPrompts: [SYSTEM_PROMPT],
      messages,
      conversationId,
    });

    const sseStream = toServerSentEventsStream(stream);

    const nodeStream = Readable.fromWeb(sseStream);

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    nodeStream.pipe(res);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "An error occurred",
    });
  }
};

export default router;
