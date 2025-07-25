import type { EnemQuestionFromAPI } from "../types";

const API_BASE_URL = "https://api.enem.dev";

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateBalancedSimulado = async (
  totalQuestions: number
): Promise<{ questions: EnemQuestionFromAPI[]; year: string }> => {
  console.log(`Iniciando geração de simulado com ${totalQuestions} questões.`);

  const distribution = {
    matematica: 0.25,
    linguagens: 0.25,
    "ciencias-natureza": 0.25,
    "ciencias-humanas": 0.25,
  };

  const questionsNeeded = {
    matematica: Math.ceil(totalQuestions * distribution.matematica),
    linguagens: Math.ceil(totalQuestions * distribution.linguagens),
    "ciencias-natureza": Math.floor(
      totalQuestions * distribution["ciencias-natureza"]
    ),
    "ciencias-humanas": Math.floor(
      totalQuestions * distribution["ciencias-humanas"]
    ),
  };

  const recentYears = [2023, 2022, 2021, 2020];
  const randomYear =
    recentYears[Math.floor(Math.random() * recentYears.length)];

  const allQuestionsFromYear: EnemQuestionFromAPI[] = [];
  const offsets = [0, 50, 100, 150];

  console.log(
    `Iniciando varredura da prova de ${randomYear} (com foco em Inglês)...`
  );

  for (const offset of offsets) {
    // CORREÇÃO FINAL: Adicionamos o parâmetro `&language=ingles` em todas as chamadas.
    const url = `${API_BASE_URL}/v1/exams/${randomYear}/questions?limit=50&offset=${offset}&language=ingles`;
    console.log(`Buscando pedaço da prova em: ${url}`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(
          `Não foi possível buscar o pedaço da prova com offset ${offset} para o ano ${randomYear}.`
        );
        continue;
      }
      const responseData = await response.json();
      if (responseData.questions && Array.isArray(responseData.questions)) {
        allQuestionsFromYear.push(...responseData.questions);
      }
    } catch (error) {
      console.error(`Erro ao buscar o pedaço com offset ${offset}:`, error);
    }
  }

  console.log(
    `Varredura completa. Total de ${allQuestionsFromYear.length} questões coletadas para o ano ${randomYear}.`
  );

  if (allQuestionsFromYear.length === 0) {
    console.error("Nenhuma questão foi coletada da API.");
    return { questions: [], year: String(randomYear) };
  }

  const questionPool: { [key: string]: EnemQuestionFromAPI[] } = {
    matematica: [],
    linguagens: [],
    "ciencias-natureza": [],
    "ciencias-humanas": [],
  };

  allQuestionsFromYear.forEach((q) => {
    switch (q.discipline) {
      case "matematica":
        questionPool.matematica.push(q);
        break;
      case "linguagens":
        // Garantimos aqui que só questões de inglês entrem, embora a API já deva ter filtrado.
        if (q.language === "ingles") {
          questionPool.linguagens.push(q);
        }
        break;
      case "ciencias-natureza":
        questionPool["ciencias-natureza"].push(q);
        break;
      case "ciencias-humanas":
        questionPool["ciencias-humanas"].push(q);
        break;
    }
  });

  console.log("Coleta finalizada. Tamanho dos pools:", {
    matematica: questionPool.matematica.length,
    linguagens: questionPool.linguagens.length,
    "ciencias-natureza": questionPool["ciencias-natureza"].length,
    "ciencias-humanas": questionPool["ciencias-humanas"].length,
  });

  const finalQuestions: EnemQuestionFromAPI[] = [];
  Object.keys(questionsNeeded).forEach((area) => {
    const neededCount = questionsNeeded[area as keyof typeof questionsNeeded];
    const candidates = questionPool[area as keyof typeof questionPool];
    if (candidates.length > 0) {
      const selected = shuffleArray(candidates).slice(0, neededCount);
      finalQuestions.push(...selected);
    } else {
      console.warn(`Pool de '${area}' está vazio para o ano ${randomYear}.`);
    }
  });

  if (finalQuestions.length < totalQuestions * 0.8) {
    console.warn(
      `Não foram encontradas questões suficientes para montar o simulado completo do ano ${randomYear}. Resultado final com ${finalQuestions.length} questões.`
    );
  }

  return { questions: shuffleArray(finalQuestions), year: String(randomYear) };
};
