import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getPsychologyResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Samahani, huduma ya AI haipatikani kwa sasa. Tafadhali wasiliana nasi kwa WhatsApp.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: "Wewe ni msaidizi mwerevu na mwenye hekima wa kisaikolojia kwa jukwaa la Life Psychology TZ. Jibu maswali yote kwa lugha ya Kiswahili fasaha. Toa ushauri wa kisaikolojia unaozingatia maadili, huruma, na sayansi. Usitoe ushauri wa kimatibabu (medical advice) bali elekeza kwenye mbinu za kujisaidia (self-help) na tabia njema. Kuwa mfupi, wazi, na mwenye kutia moyo.",
      }
    });
    
    return response.text || "Samahani, sikuweza kuelewa swali lako vizuri.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Samahani, kumetokea hitilafu kidogo. Tafadhali jaribu tena baadaye.";
  }
};