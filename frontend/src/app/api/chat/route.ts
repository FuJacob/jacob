import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import getSystemPrompt from "./prompt";
const ai = new GoogleGenAI({
  apiKey: process.env.MY_SECRET_API_KEY,
});

export async function POST(req: Request) {
  const prompt = getSystemPrompt();
  try {
    const body = await req.json();

    const { question } = body;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [question],
      config: {
        systemInstruction: prompt,
      },
    });

    return NextResponse.json({ answer: response.text });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
