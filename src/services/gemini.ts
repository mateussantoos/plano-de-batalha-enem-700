// src/services/gemini.ts
import type {
  GeneratedQuestionsResponse,
  StudyMaterialContent,
} from "../types";

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

export const generateStudyMaterial = async (
  topic: string
): Promise<StudyMaterialContent> => {
  const prompt = `
  Atue como um tutor de matemática super amigável e didático, com um estilo visual e "fofo".
  Sua missão é criar um material de estudo completo sobre o tópico de matemática para o ENEM: "${topic}".
  A explicação deve ser perfeita para um iniciante, muito clara e passo a passo.

  **REGRAS DE FORMATAÇÃO OBRIGATÓRIAS:**
  1.  Use emojis como 🎓, ✨, 🧠, 🎯, 💡, ✅.
  2.  Estruture a resposta em seções claras usando títulos diretos em Markdown com \`##\`.
  3.  **Fórmulas Matemáticas:** TODAS as fórmulas, sem exceção, devem ser formatadas usando a sintaxe KaTeX em modo de BLOCO (\`$$\`). **NUNCA use o formato inline (\`$\`)**.
  4.  **Use quebras de linha DUPLAS (dois '\\n') entre parágrafos, listas, e ANTES e DEPOIS de cada bloco de fórmula KaTeX para garantir a renderização correta.**
  5.  Use negrito (\`**\`) para destacar termos-chave.
  6.  Todo o conteúdo deve ser em formato Markdown.
`;

  const generationConfig = {
    responseMimeType: "application/json",
    responseSchema: {
      type: "OBJECT",
      properties: {
        introduction: {
          type: "STRING",
          description: "Uma introdução amigável e divertida sobre o tópico.",
        },
        coreConcepts: {
          type: "ARRAY",
          description:
            "Uma lista dos conceitos principais, cada um com título e explicação.",
          items: {
            type: "OBJECT",
            properties: {
              title: {
                type: "STRING",
                description:
                  "O título do conceito (ex: '✨ O que é uma Função?').",
              },
              explanation: {
                type: "STRING",
                description: "A explicação detalhada do conceito em Markdown.",
              },
            },
          },
        },
        practicalExample: {
          type: "OBJECT",
          description:
            "Um exemplo prático com descrição e resolução passo a passo.",
          properties: {
            description: {
              type: "STRING",
              description: "A descrição do problema do exemplo.",
            },
            resolution: {
              type: "STRING",
              description: "A resolução passo a passo do exemplo em Markdown.",
            },
          },
        },
        enemTip: {
          type: "STRING",
          description:
            "Uma dica final de como este tópico costuma cair no ENEM.",
        },
      },
    },
  };

  try {
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    };
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) {
      console.error("API Error Response:", await response.text());
      throw new Error(`API error: ${response.statusText}`);
    }
    const result = await response.json();
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content.parts[0].text
    ) {
      return JSON.parse(result.candidates[0].content.parts[0].text);
    }
    throw new Error("Não foi possível gerar o material de estudo.");
  } catch (error) {
    console.error("Erro ao gerar material de estudo com Gemini:", error);
    throw new Error(
      "Falha ao gerar material de estudo. Verifique o console para mais detalhes."
    );
  }
};
