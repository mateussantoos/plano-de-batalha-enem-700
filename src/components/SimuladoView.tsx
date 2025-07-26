import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { EnemQuestionFromAPI } from "../types";
import { analyzeMistakes } from "../services/analysisService";
import { Loader } from "./Loader";

interface SimuladoViewProps {
  questions: EnemQuestionFromAPI[];
  title: string;
  onFinish: () => void;
}

export default function SimuladoView({
  questions,
  title,
  onFinish,
}: SimuladoViewProps) {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished]);

  const handleSelectAnswer = (
    questionIndex: number,
    alternativeLetter: string
  ) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: alternativeLetter,
    }));
  };

  const handleFinish = async () => {
    setIsFinished(true);
    setIsAnalyzing(true);

    const mistakes = questions
      .map((q) => {
        const userAnswerLetter = selectedAnswers[q.index];
        if (userAnswerLetter && userAnswerLetter !== q.correctAlternative) {
          const userAnswerAlternative = q.alternatives.find(
            (a) => a.letter === userAnswerLetter
          );
          const correctAnswerAlternative = q.alternatives.find(
            (a) => a.letter === q.correctAlternative
          );

          const userAnswerText =
            userAnswerAlternative?.text ||
            (userAnswerAlternative?.file ? "Imagem" : "Não encontrada");
          const correctAnswerText =
            correctAnswerAlternative?.text ||
            (correctAnswerAlternative?.file ? "Imagem" : "Não encontrada");

          return {
            questionContext: q.context,
            userAnswer: `(${userAnswerLetter}) ${userAnswerText}`,
            correctAnswer: `(${q.correctAlternative}) ${correctAnswerText}`,
          };
        }
        return null;
      })
      .filter(Boolean);

    const analysisResult = await analyzeMistakes(mistakes as any);
    setAnalysis(analysisResult);
    setIsAnalyzing(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const score = questions.reduce((acc, q) => {
    return selectedAnswers[q.index] === q.correctAlternative ? acc + 1 : acc;
  }, 0);

  if (isFinished) {
    return (
      <div className="fixed inset-0 bg-white z-50 p-4 md:p-8 flex flex-col">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold">Resultado do Simulado</h2>
          <button
            onClick={onFinish}
            className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Fechar
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
            <p className="text-lg">Sua Pontuação</p>
            <p className="text-4xl font-bold text-blue-600">
              {score} / {questions.length}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-2 text-center">
              Análise da IA
            </h3>
            {isAnalyzing ? (
              <div className="flex justify-center p-8">
                <Loader />
              </div>
            ) : (
              <div
                className="prose prose-sm max-w-none p-2"
                dangerouslySetInnerHTML={{
                  __html:
                    analysis
                      ?.replace(/\n/g, "<br/>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") || "",
                }}
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Revisão das Questões</h3>
            {questions.map((q) => {
              const userAnswer = selectedAnswers[q.index];
              const isCorrect = userAnswer === q.correctAlternative;
              const textContext = q.context
                ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
                : "";

              return (
                <div
                  key={q.index}
                  className={`p-4 border rounded-lg mb-4 ${
                    isCorrect
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                  }`}
                >
                  <p className="font-semibold mb-2 text-sm text-gray-500">
                    ENEM {q.year} - {q.discipline}
                  </p>
                  <div className="prose prose-sm max-w-none mb-4">
                    <ReactMarkdown>{textContext}</ReactMarkdown>
                  </div>
                  {q.files && q.files.length > 0 && (
                    <div className="space-y-4 my-4">
                      {q.files.map((fileUrl, idx) => (
                        <img
                          key={idx}
                          src={fileUrl}
                          alt={`Imagem ${idx + 1} da questão`}
                          className="max-w-full h-auto rounded-md mx-auto border"
                        />
                      ))}
                    </div>
                  )}
                  {q.alternativesIntroduction && (
                    <p className="font-semibold text-gray-800 my-4">
                      {q.alternativesIntroduction}
                    </p>
                  )}
                  <div className="space-y-2">
                    {q.alternatives.map((opt) => {
                      const isSelected = userAnswer === opt.letter;
                      const isCorrectAnswer =
                        q.correctAlternative === opt.letter;
                      return (
                        <div
                          key={opt.letter}
                          className={`flex items-start p-2 rounded-md border text-left ${
                            isCorrectAnswer
                              ? "bg-green-200 border-green-400"
                              : ""
                          } ${
                            isSelected && !isCorrectAnswer
                              ? "bg-red-200 border-red-400"
                              : ""
                          }`}
                        >
                          <span className="font-bold mr-2">{opt.letter})</span>
                          {opt.text && <p className="text-sm">{opt.text}</p>}
                          {opt.file && (
                            <img
                              src={opt.file}
                              alt={`Alternativa ${opt.letter}`}
                              className="max-w-xs h-auto rounded"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 md:p-8 flex flex-col">
      <header className="flex justify-between items-center pb-4 border-b flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold bg-gray-100 px-4 py-2 rounded-lg">
            <span>⏳</span> {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
          <button
            onClick={handleFinish}
            className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Finalizar
          </button>
        </div>
      </header>
      <div className="flex-grow overflow-y-auto pt-6">
        {questions.map((q) => {
          const textContext = q.context
            ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
            : "";
          return (
            <div key={q.index} className="mb-8 p-4 border rounded-lg">
              <p className="font-semibold mb-2 text-sm text-gray-500">
                Questão {q.index} (ENEM {q.year})
              </p>
              <div className="prose prose-sm max-w-none mb-4">
                <ReactMarkdown>{textContext}</ReactMarkdown>
              </div>
              {q.files && q.files.length > 0 && (
                <div className="space-y-4 my-4">
                  {q.files.map((fileUrl, idx) => (
                    <img
                      key={idx}
                      src={fileUrl}
                      alt={`Imagem ${idx + 1} da questão`}
                      className="max-w-full h-auto rounded-md mx-auto border"
                    />
                  ))}
                </div>
              )}
              {q.alternativesIntroduction && (
                <p className="font-semibold text-gray-800 my-4">
                  {q.alternativesIntroduction}
                </p>
              )}
              <div className="space-y-3">
                {q.alternatives.map((opt) => (
                  <label
                    key={opt.letter}
                    className={`flex items-start p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedAnswers[q.index] === opt.letter
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.index}`}
                      value={opt.letter}
                      checked={selectedAnswers[q.index] === opt.letter}
                      onChange={() => handleSelectAnswer(q.index, opt.letter)}
                      className="mr-3 mt-1 shrink-0"
                    />
                    <div className="w-full">
                      {opt.text && <span className="text-sm">{opt.text}</span>}
                      {opt.file && (
                        <img
                          src={opt.file}
                          alt={`Alternativa ${opt.letter}`}
                          className="max-w-xs h-auto rounded"
                        />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
