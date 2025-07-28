import { useState } from "react";
import type { GeneratedQuestion } from "../../../types";
import { analyzeQuizMistakes } from "../../../services/analysisService";
import { Loader } from "../../Loader";
import Button from "../../common/Button";

interface AiQuizModalContentProps {
  questions: GeneratedQuestion[];
  topic: string;
}

export default function AiQuizModalContent({
  questions,
  topic,
}: AiQuizModalContentProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  const handleFinish = async () => {
    setIsFinished(true);
    setIsAnalyzing(true);
    const mistakes = questions
      .map((q, idx) => {
        const userAnswerIndex = selectedAnswers[idx];
        if (
          userAnswerIndex !== undefined &&
          userAnswerIndex !== q.correct_answer_index
        ) {
          return {
            question: q.question_text,
            userAnswer: q.options[userAnswerIndex],
            correctAnswer: q.options[q.correct_answer_index],
            explanation: q.explanation,
          };
        }
        return null;
      })
      .filter(Boolean);

    const analysisResult = await analyzeQuizMistakes(mistakes as any);
    setAnalysis(analysisResult);
    setIsAnalyzing(false);
  };

  const score = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correct_answer_index ? acc + 1 : acc;
  }, 0);

  return (
    <div className="w-full">
      <div className="text-center mb-6 sm:mb-8 scrollbar-hide">
        <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-2">
          Prática sobre "{topic}"
        </h3>
        <div className="w-12 sm:w-16 h-1 bg-duo-green-dark mx-auto rounded-full"></div>
      </div>

      <div
        className={`grid grid-cols-1 ${
          isFinished ? "lg:grid-cols-2 gap-4 sm:gap-8" : ""
        }`}
      >
        {isFinished && (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-green-200 order-last lg:order-first shadow-lg scrollbar-hide max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
            <h4 className="font-black text-center mb-3 sm:mb-4 text-gray-800 uppercase tracking-wide text-sm sm:text-base">
              🏆 Resumo da IA
            </h4>
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
                Sua Pontuação
              </p>
              <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center shadow-lg border-4 border-green-200">
                <p className="text-2xl sm:text-3xl font-black text-green-600">
                  {score}/{questions.length}
                </p>
              </div>
            </div>
            {isAnalyzing ? (
              <div className="flex justify-center p-4">
                <Loader />
              </div>
            ) : (
              <div
                className="text-xs sm:text-sm prose prose-sm max-w-none bg-white p-3 sm:p-4 rounded-xl shadow-sm"
                dangerouslySetInnerHTML={{ __html: analysis || "" }}
              />
            )}
          </div>
        )}

        <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-1 sm:pr-2 space-y-4 sm:space-y-6 scrollbar-hide">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                isFinished
                  ? selectedAnswers[index] === q.correct_answer_index
                    ? "bg-green-50 border-green-300 shadow-lg"
                    : "bg-red-50 border-red-300 shadow-lg"
                  : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                <div
                  className={`p-2 sm:p-3 h-6 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3 flex-shrink-0 ${
                    isFinished
                      ? selectedAnswers[index] === q.correct_answer_index
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-duo-blue"
                  }`}
                >
                  {index + 1}
                </div>
                <p className="font-bold text-gray-800 text-sm sm:text-lg leading-tight">
                  {q.question_text}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correct_answer_index;
                  const isSelected = selectedAnswers[index] === i;
                  return (
                    <label
                      key={i}
                      className={`flex items-start p-3 sm:p-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 border-gray-300 cursor-pointer transition-all duration-200 font-semibold
                        ${
                          isFinished
                            ? isCorrect
                              ? "bg-green-200 border-green-400 text-green-800 shadow-md"
                              : isSelected && !isCorrect
                              ? "bg-red-200 border-red-400 text-red-800 shadow-md"
                              : "bg-gray-100 border-gray-300 text-gray-600"
                            : isSelected
                            ? "bg-duo-blue-light border-duo-blue text-duo-blue shadow-md"
                            : "hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm text-gray-500"
                        }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={isSelected}
                        disabled={isFinished}
                        onChange={() => handleSelectAnswer(index, i)}
                        className="mr-2 sm:mr-3 mt-1 w-4 h-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="leading-relaxed">{opt}</span>
                    </label>
                  );
                })}
              </div>

              {isFinished && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg sm:rounded-xl">
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1 text-sm">
                      💡
                    </span>
                    <div>
                      <strong className="font-bold text-yellow-800 block mb-1 text-xs sm:text-sm">
                        Explicação:
                      </strong>
                      <p className="text-xs sm:text-sm text-yellow-700 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {!isFinished && (
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Button onClick={handleFinish} variant="terciary">
            🎯 Finalizar e Corrigir
          </Button>
        </div>
      )}
    </div>
  );
}
