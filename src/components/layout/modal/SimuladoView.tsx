import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { EnemQuestionFromAPI } from "../../../types";
import { analyzeMistakes } from "../../../services/analysisService";
import { Loader } from "../../Loader";
import Button from "../../common/Button";

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
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 z-50 p-4 md:p-8 flex flex-col">
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <h2 className="text-3xl font-black text-gray-800 uppercase tracking-wide">
            🏆 Resultado do Simulado
          </h2>
          <button
            onClick={onFinish}
            className="text-gray-400 hover:text-gray-600 text-3xl font-bold hover:bg-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            ×
          </button>
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-hide">
          <div className="bg-white p-8 rounded-3xl  mb-8 text-center border-4 border-green-200">
            <p className="text-lg font-semibold text-gray-600 mb-4">
              Sua Pontuação
            </p>
            <div className="">
              <p className="text-5xl font-black text-duo-blue-dark">
                {score}/{questions.length}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl  mb-8 border-4 border-blue-200">
            <h3 className="text-2xl font-black text-center mb-6 text-gray-800 uppercase tracking-wide">
              🧠 Análise da IA
            </h3>
            {isAnalyzing ? (
              <div className="flex justify-center p-8">
                <Loader />
              </div>
            ) : (
              <div
                className="prose prose-lg max-w-none p-6 bg-gray-50 rounded-2xl"
                dangerouslySetInnerHTML={{
                  __html:
                    analysis
                      ?.replace(/\n/g, "<br/>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") || "",
                }}
              />
            )}
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-purple-200">
            <h3 className="text-2xl font-black text-center mb-6 text-gray-800 uppercase tracking-wide">
              📝 Revisão das Questões
            </h3>
            <div className="space-y-6">
              {questions.map((q) => {
                const userAnswer = selectedAnswers[q.index];
                const isCorrect = userAnswer === q.correctAlternative;
                const textContext = q.context
                  ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
                  : "";

                return (
                  <div
                    key={q.index}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isCorrect
                        ? "bg-green-50 border-green-300 shadow-lg"
                        : "bg-red-50 border-red-300 shadow-lg"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${
                          isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {q.index}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          ENEM {q.year} - {q.discipline}
                        </p>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-6 bg-white p-4 rounded-xl shadow-sm">
                      <ReactMarkdown>{textContext}</ReactMarkdown>
                    </div>

                    {q.files && q.files.length > 0 && (
                      <div className="space-y-4 my-6">
                        {q.files.map((fileUrl, idx) => (
                          <img
                            key={idx}
                            src={fileUrl}
                            alt={`Imagem ${idx + 1} da questão`}
                            className="max-w-full h-auto rounded-xl mx-auto border-2 border-gray-200 shadow-md"
                          />
                        ))}
                      </div>
                    )}

                    {q.alternativesIntroduction && (
                      <p className="font-bold text-gray-800 my-4 text-lg">
                        {q.alternativesIntroduction}
                      </p>
                    )}

                    <div className="space-y-3">
                      {q.alternatives.map((opt) => {
                        const isSelected = userAnswer === opt.letter;
                        const isCorrectAnswer =
                          q.correctAlternative === opt.letter;
                        return (
                          <div
                            key={opt.letter}
                            className={`flex items-start p-4 rounded-xl border-2 transition-all duration-200 ${
                              isCorrectAnswer
                                ? "bg-green-200 border-green-400 text-green-800 shadow-md"
                                : isSelected && !isCorrectAnswer
                                ? "bg-red-200 border-red-400 text-red-800 shadow-md"
                                : "bg-gray-100 border-gray-300 text-gray-600"
                            }`}
                          >
                            <span className="font-bold mr-3 text-lg">
                              {opt.letter})
                            </span>
                            <div className="flex-1">
                              {opt.text && (
                                <p className="text-base font-semibold">
                                  {opt.text}
                                </p>
                              )}
                              {opt.file && (
                                <img
                                  src={opt.file}
                                  alt={`Alternativa ${opt.letter}`}
                                  className="max-w-xs h-auto rounded-lg mt-2 border-2 border-gray-200"
                                />
                              )}
                            </div>
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
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 z-50 p-4 md:p-8 flex flex-col">
      <header className="flex justify-between items-center pb-6 border-b-2 border-gray-200 flex-shrink-0 mb-6">
        <h2 className="text-3xl font-black text-gray-800 uppercase tracking-wide">
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <div className="bg-white px-6 py-2 rounded-2xl  border-2 border-b-4 border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏳</span>
              <span className="text-xl font-black text-gray-800">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <Button onClick={onFinish} variant="danger">
            Cancelar
          </Button>
          <Button onClick={handleFinish} variant="tertiary">
            Finalizar
          </Button>
        </div>
      </header>
      <div className="flex-grow overflow-y-auto pt-6 scrollbar-hide">
        <div className="space-y-8">
          {questions.map((q) => {
            const textContext = q.context
              ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
              : "";
            return (
              <div
                key={q.index}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 bg-duo-blue">
                    {q.index}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Questão {q.index} (ENEM {q.year})
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-6 bg-gray-50 p-4 rounded-xl">
                  <ReactMarkdown>{textContext}</ReactMarkdown>
                </div>

                {q.files && q.files.length > 0 && (
                  <div className="space-y-4 my-6">
                    {q.files.map((fileUrl, idx) => (
                      <img
                        key={idx}
                        src={fileUrl}
                        alt={`Imagem ${idx + 1} da questão`}
                        className="max-w-full h-auto rounded-xl mx-auto border-2 border-gray-200 shadow-md"
                      />
                    ))}
                  </div>
                )}

                {q.alternativesIntroduction && (
                  <p className="font-bold text-gray-800 my-4 text-lg">
                    {q.alternativesIntroduction}
                  </p>
                )}

                <div className="space-y-3">
                  {q.alternatives.map((opt) => (
                    <label
                      key={opt.letter}
                      className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 font-semibold ${
                        selectedAnswers[q.index] === opt.letter
                          ? "bg-duo-blue-light border-duo-blue text-duo-blue shadow-md"
                          : "border-gray-300 hover:border-gray-400 hover:shadow-sm text-gray-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.index}`}
                        value={opt.letter}
                        checked={selectedAnswers[q.index] === opt.letter}
                        onChange={() => handleSelectAnswer(q.index, opt.letter)}
                        className="mr-3 mt-1 w-4 h-4 text-green-600 focus:ring-green-500 shrink-0"
                      />
                      <div className="w-full">
                        {opt.text && (
                          <span className="text-base text-gray-500">
                            {opt.text}
                          </span>
                        )}
                        {opt.file && (
                          <img
                            src={opt.file}
                            alt={`Alternativa ${opt.letter}`}
                            className="max-w-xs h-auto rounded-lg mt-2 border-2 border-gray-200"
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
    </div>
  );
}
