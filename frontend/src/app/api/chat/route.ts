import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBfInPr1PtZM2NeD_5RuvxlZ4xpL6DRlqY",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { question } = body;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [question],
      config: {
        systemInstruction: "hasdasd asd asd as d",
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
