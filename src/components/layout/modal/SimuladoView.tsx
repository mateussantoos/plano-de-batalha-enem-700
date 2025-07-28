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
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 z-50 p-2 sm:p-4 md:p-8 flex flex-col">
        <div className="flex justify-between items-center mb-4 sm:mb-6 flex-shrink-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-wide">
            🏆 Resultado do Simulado
          </h2>
          <button
            onClick={onFinish}
            className="text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl font-bold hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            ×
          </button>
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-hide">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl mb-4 sm:mb-6 md:mb-8 text-center border-2 sm:border-4 border-green-200">
            <p className="text-sm sm:text-lg font-semibold text-gray-600 mb-3 sm:mb-4">
              Sua Pontuação
            </p>
            <div className="">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-duo-blue-dark">
                {score}/{questions.length}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl mb-4 sm:mb-6 md:mb-8 border-2 sm:border-4 border-blue-200">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-4 sm:mb-6 text-gray-800 uppercase tracking-wide">
              🧠 Análise da IA
            </h3>
            {isAnalyzing ? (
              <div className="flex justify-center p-4 sm:p-6 md:p-8">
                <Loader />
              </div>
            ) : (
              <div
                className="prose prose-sm sm:prose-base md:prose-lg max-w-none p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl"
                dangerouslySetInnerHTML={{
                  __html:
                    analysis
                      ?.replace(/\n/g, "<br/>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") || "",
                }}
              />
            )}
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border-2 sm:border-4 border-purple-200">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-4 sm:mb-6 text-gray-800 uppercase tracking-wide">
              📝 Revisão das Questões
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {questions.map((q) => {
                const userAnswer = selectedAnswers[q.index];
                const isCorrect = userAnswer === q.correctAlternative;
                const textContext = q.context
                  ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
                  : "";

                return (
                  <div
                    key={q.index}
                    className={`p-4 sm:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                      isCorrect
                        ? "bg-green-50 border-green-300 shadow-lg"
                        : "bg-red-50 border-red-300 shadow-lg"
                    }`}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4 ${
                          isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {q.index}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm sm:text-lg">
                          ENEM {q.year} - {q.discipline}
                        </p>
                      </div>
                    </div>

                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none mb-4 sm:mb-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm">
                      <ReactMarkdown>{textContext}</ReactMarkdown>
                    </div>

                    {q.files && q.files.length > 0 && (
                      <div className="space-y-3 sm:space-y-4 my-4 sm:my-6">
                        {q.files.map((fileUrl, idx) => (
                          <img
                            key={idx}
                            src={fileUrl}
                            alt={`Imagem ${idx + 1} da questão`}
                            className="max-w-full h-auto rounded-lg sm:rounded-xl mx-auto border-2 border-gray-200 shadow-md"
                          />
                        ))}
                      </div>
                    )}

                    {q.alternativesIntroduction && (
                      <p className="font-bold text-gray-800 my-3 sm:my-4 text-sm sm:text-lg">
                        {q.alternativesIntroduction}
                      </p>
                    )}

                    <div className="space-y-2 sm:space-y-3">
                      {q.alternatives.map((opt) => {
                        const isSelected = userAnswer === opt.letter;
                        const isCorrectAnswer =
                          q.correctAlternative === opt.letter;
                        return (
                          <div
                            key={opt.letter}
                            className={`flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                              isCorrectAnswer
                                ? "bg-green-200 border-green-400 text-green-800 shadow-md"
                                : isSelected && !isCorrectAnswer
                                ? "bg-red-200 border-red-400 text-red-800 shadow-md"
                                : "bg-gray-100 border-gray-300 text-gray-600"
                            }`}
                          >
                            <span className="font-bold mr-2 sm:mr-3 text-sm sm:text-lg">
                              {opt.letter})
                            </span>
                            <div className="flex-1">
                              {opt.text && (
                                <p className="text-xs sm:text-sm md:text-base font-semibold">
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
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 z-50 p-2 sm:p-4 md:p-8 flex flex-col">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 sm:pb-6 border-b-2 border-gray-200 flex-shrink-0 mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-wide">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="bg-white px-4 sm:px-6 py-2 rounded-xl sm:rounded-2xl border-2 border-b-4 border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-2xl">⏳</span>
              <span className="text-lg sm:text-xl font-black text-gray-800">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <Button
              onClick={onFinish}
              variant="danger"
              className="text-xs sm:text-sm"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleFinish}
              variant="terciary"
              className="text-xs sm:text-sm"
            >
              Finalizar
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-grow overflow-y-auto pt-4 sm:pt-6 scrollbar-hide">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {questions.map((q) => {
            const textContext = q.context
              ? q.context.replace(/!\[.*?\]\(.*?\)/g, "")
              : "";
            return (
              <div
                key={q.index}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl mr-3 sm:mr-4 bg-duo-blue">
                    {q.index}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-lg">
                      Questão {q.index} (ENEM {q.year})
                    </p>
                  </div>
                </div>

                <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <ReactMarkdown>{textContext}</ReactMarkdown>
                </div>

                {q.files && q.files.length > 0 && (
                  <div className="space-y-3 sm:space-y-4 my-4 sm:my-6">
                    {q.files.map((fileUrl, idx) => (
                      <img
                        key={idx}
                        src={fileUrl}
                        alt={`Imagem ${idx + 1} da questão`}
                        className="max-w-full h-auto rounded-lg sm:rounded-xl mx-auto border-2 border-gray-200 shadow-md"
                      />
                    ))}
                  </div>
                )}

                {q.alternativesIntroduction && (
                  <p className="font-bold text-gray-800 my-3 sm:my-4 text-sm sm:text-lg">
                    {q.alternativesIntroduction}
                  </p>
                )}

                <div className="space-y-2 sm:space-y-3">
                  {q.alternatives.map((opt) => (
                    <label
                      key={opt.letter}
                      className={`flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 cursor-pointer transition-all duration-200 font-semibold ${
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
                        className="mr-2 sm:mr-3 mt-1 w-4 h-4 text-green-600 focus:ring-green-500 shrink-0"
                      />
                      <div className="w-full">
                        {opt.text && (
                          <span className="text-xs sm:text-sm md:text-base text-gray-500">
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
