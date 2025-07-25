const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

interface Mistake {
  questionContext: string | null;
  userAnswer: string;
  correctAnswer: string;
}

interface QuizMistake {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export const analyzeMistakes = async (mistakes: Mistake[]): Promise<string> => {
  if (mistakes.length === 0) {
    return "Parabéns, você não cometeu erros! Continue assim.";
  }

  const prompt = `
    Um estudante está se preparando para o ENEM e cometeu alguns erros em um simulado. Analise os erros a seguir e forneça um feedback construtivo e encorajador em português. Para cada erro, explique brevemente o possível motivo (ex: falta de atenção, erro de interpretação, desconhecimento do conceito) e dê uma dica de como melhorar. Finalize com um resumo geral e uma mensagem motivacional.

    **Erros Cometidos:**
    ${mistakes
      .map(
        (m, i) => `
      ---
      **Erro #${i + 1}**
      **Contexto da Questão:** ${m.questionContext?.substring(0, 200)}...
      **Resposta do Usuário:** ${m.userAnswer}
      **Resposta Correta:** ${m.correctAnswer}
      ---
    `
      )
      .join("\n")}
  `;

  try {
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

    if (result.candidates && result.candidates.length > 0) {
      return result.candidates[0].content.parts[0].text;
    }
    throw new Error("Não foi possível gerar a análise.");
  } catch (error) {
    console.error("Erro ao gerar análise com Gemini:", error);
    return "Não foi possível gerar a análise no momento. Verifique sua conexão ou a chave da API.";
  }
};

export const analyzeQuizMistakes = async (
  mistakes: QuizMistake[]
): Promise<string> => {
  if (mistakes.length === 0) {
    return "<h3>Parabéns!</h3><p>Você acertou todas as questões. Isso demonstra um ótimo entendimento do conteúdo. Continue praticando para solidificar ainda mais seu conhecimento!</p>";
  }

  const prompt = `
  Um estudante praticou com questões geradas por IA sobre um tópico específico do ENEM e cometeu alguns erros. Seu papel é atuar como um tutor virtual. Analise os erros abaixo e forneça um feedback em HTML simples (usando <p>, <strong>, <ul>, <li>). O feedback deve ser encorajador e direto ao ponto.

  **Estrutura da Resposta:**
  1.  Comece com uma saudação e um resumo geral (ex: "Ótimo trabalho ao praticar! Notei alguns pontos recorrentes nos seus erros que, se ajustados, vão elevar muito seu desempenho.").
  2.  Crie uma seção "Pontos de Melhoria" em uma lista (<ul>). Para cada ponto, identifique o conceito principal do erro (ex: "Interpretação do Enunciado", "Conceito de Crase", "Cálculo de Porcentagem").
  3.  Finalize com uma "Dica do Tutor" e uma mensagem motivacional curta.

  **Erros do Aluno:**
  ${mistakes
    .map(
      (m, i) => `
    ---
    **Erro #${i + 1}**
    **Questão:** ${m.question}
    **Resposta do Aluno:** ${m.userAnswer}
    **Resposta Correta:** ${m.correctAnswer}
    **Explicação da Resposta:** ${m.explanation}
    ---
  `
    )
    .join("\n")}
  `;

  try {
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

    if (result.candidates && result.candidates.length > 0) {
      return result.candidates[0].content.parts[0].text;
    }
    throw new Error("Não foi possível gerar a análise do quiz.");
  } catch (error) {
    console.error("Erro ao gerar análise do quiz com Gemini:", error);
    return "Não foi possível gerar a análise do quiz no momento.";
  }
};
