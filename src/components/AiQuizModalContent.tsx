import { useState } from "react";
import type { GeneratedQuestion } from "../types";
import { analyzeQuizMistakes } from "../services/analysisService";
import Loader from "./Loader";
import ActionButton from "./ActionButton";

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
      <h3 className="text-xl font-bold mb-4 text-center">
        Prática sobre "{topic}"
      </h3>
      <div
        className={`grid grid-cols-1 ${
          isFinished ? "lg:grid-cols-2 gap-6" : ""
        }`}
      >
        {isFinished && (
          <div className="bg-gray-50 p-4 rounded-lg border order-last lg:order-first">
            <h4 className="font-bold text-center mb-2">Resumo da IA</h4>
            <div className="text-center mb-4">
              <p className="text-sm">Sua Pontuação</p>
              <p className="text-2xl font-bold text-blue-600">
                {score} / {questions.length}
              </p>
            </div>
            {isAnalyzing ? (
              <div className="flex justify-center p-4">
                <span className="text-sm ">Gerando análise...</span>
                <Loader />
              </div>
            ) : (
              <div
                className="text-sm prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: analysis || "" }}
              />
            )}
          </div>
        )}

        <div className="max-h-[60vh] overflow-y-auto pr-2">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`mb-6 p-3 rounded-md ${
                isFinished
                  ? selectedAnswers[index] === q.correct_answer_index
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                  : ""
              }`}
            >
              <p className="font-semibold mb-2 text-sm">
                Questão {index + 1}: {q.question_text}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correct_answer_index;
                  const isSelected = selectedAnswers[index] === i;
                  return (
                    <label
                      key={i}
                      className={`flex items-start p-2 text-sm rounded-md border cursor-pointer transition-colors 
                        ${
                          isFinished
                            ? isCorrect
                              ? "bg-green-200 font-semibold"
                              : isSelected
                              ? "bg-red-200"
                              : ""
                            : isSelected
                            ? "bg-blue-100 border-blue-300"
                            : "hover:bg-gray-100"
                        }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={isSelected}
                        disabled={isFinished}
                        onChange={() => handleSelectAnswer(index, i)}
                        className="mr-2 mt-1"
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isFinished && (
        <div className="mt-6 flex justify-center">
          <ActionButton
            text="Finalizar e Corrigir"
            onClick={handleFinish}
            className="bg-green-500 hover:bg-green-600"
          />
        </div>
      )}
    </div>
  );
}
