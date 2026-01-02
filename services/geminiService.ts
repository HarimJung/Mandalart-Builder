
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTaskSuggestions = async (category: string, currentTasks: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on the goal category "${category}" and current items: ${currentTasks.join(', ')}, suggest 3 more ambitious and actionable tasks. Return them as a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });
    
    return JSON.parse(response.text.trim()) as string[];
  } catch (error) {
    console.error("Error generating suggestions:", error);
    return [];
  }
};
