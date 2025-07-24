// src/services/gemini.ts
import type { GeneratedQuestionsResponse } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

export const generateRepertoire = async (theme: string): Promise<string> => {
  const prompt = `Para o tema de redação do ENEM "${theme}", gere um repertório sociocultural rico e diversificado, em português. Organize a resposta em uma lista com os seguintes itens: 1. Uma citação filosófica ou de um pensador relevante com breve explicação. 2. Um dado estatístico ou relatório de uma fonte confiável. 3. Um fato histórico relacionado. 4. Um livro, filme ou série que ilustre o problema. Para cada item, forneça um pequeno texto explicando como ele pode ser usado na redação.`;
  const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  if (!response.ok) throw new Error(`API error: ${response.statusText}`);
  const result = await response.json();
  if (
    result.candidates &&
    result.candidates.length > 0 &&
    result.candidates[0].content.parts[0].text
  ) {
    return result.candidates[0].content.parts[0].text;
  }
  throw new Error("Resposta da API vazia ou inválida.");
};

export const generateQuestions = async (
  topic: string
): Promise<GeneratedQuestionsResponse> => {
  const prompt = `Gere 2 questões de múltipla escolha, em português e no estilo do ENEM, sobre o tópico "${topic}".`;
  const generationConfig = {
    responseMimeType: "application/json",
    responseSchema: {
      type: "OBJECT",
      properties: {
        questions: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              question_text: { type: "STRING" },
              options: { type: "ARRAY", items: { type: "STRING" } },
              correct_answer_index: { type: "NUMBER" },
              explanation: { type: "STRING" },
            },
          },
        },
      },
    },
  };
  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  };
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  if (!response.ok) throw new Error(`API error: ${response.statusText}`);
  const result = await response.json();
  if (result.candidates && result.candidates[0].content.parts[0].text) {
    return JSON.parse(result.candidates[0].content.parts[0].text);
  }
  throw new Error("Resposta da API vazia ou inválida.");
};
