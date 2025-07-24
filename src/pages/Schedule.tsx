// src/pages/Schedule.tsx
import React, { useState } from "react";
import { studyData } from "../constants/studyData";
import { generateQuestions } from "../services/gemini";
import Card from "../components/Card";
import AiButton from "../components/AiButton";
import type { GeneratedQuestion } from "../types";

interface ScheduleProps {
  setModalContent: (content: React.ReactNode) => void;
}

export default function Schedule({ setModalContent }: ScheduleProps) {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [generatingQuestions, setGeneratingQuestions] = useState<string | null>(
    null
  );

  const handleGenerateQuestions = async (content: string) => {
    setGeneratingQuestions(content);
    try {
      const data = await generateQuestions(content);
      const questionContent = (
        <div>
          <h3 className="text-xl font-bold mb-4">Questões sobre "{content}"</h3>
          {data.questions.map((q: GeneratedQuestion, index: number) => (
            <div key={index} className="mb-6">
              <p className="font-semibold mb-2">
                Questão {index + 1}: {q.question_text}
              </p>
              <ul className="list-none space-y-1 mb-3">
                {q.options.map((opt: string, i: number) => (
                  <li key={i}>
                    <span className="font-bold">
                      {String.fromCharCode(65 + i)})
                    </span>{" "}
                    {opt}
                  </li>
                ))}
              </ul>
              <details className="bg-gray-100 p-2 rounded-md cursor-pointer">
                <summary className="font-semibold text-sm">
                  Ver Resposta e Explicação
                </summary>
                <div className="mt-2 text-sm">
                  <p>
                    <strong>Resposta Correta:</strong>{" "}
                    {String.fromCharCode(65 + q.correct_answer_index)}){" "}
                    {q.options[q.correct_answer_index]}
                  </p>
                  <p className="mt-1">
                    <strong>Explicação:</strong> {q.explanation}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      );
      setModalContent(questionContent);
    } catch (error) {
      setModalContent(
        <p className="text-red-500">Erro ao gerar questões. Tente novamente.</p>
      );
    } finally {
      setGeneratingQuestions(null);
    }
  };

  return (
    <section id="cronograma" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {studyData.schedule.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
          {studyData.schedule.intro}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {studyData.schedule.weeks.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedWeek(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedWeek === i
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            Semana {i + 1}
          </button>
        ))}
      </div>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-700">
          Foco da Semana:{" "}
          <span className="text-[#3a86ff]">
            {studyData.schedule.weeks[selectedWeek].focus}
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyData.schedule.weeks[selectedWeek].days.map((d) => (
          <Card key={d.day} className="p-5">
            <div className="flex-grow ">
              <h4 className="text-lg font-bold text-gray-800">{d.day}</h4>
              <p className="text-md font-semibold text-[#3a86ff] mt-1">
                {d.subject}
              </p>
              <div className="mt-4 text-gray-600 space-y-2">
                <p>
                  <span className="font-semibold">Conteúdo:</span> {d.content}
                </p>
                <p>
                  <span className="font-semibold">Atividade:</span> {d.activity}
                </p>
              </div>
            </div>
            <div className="flex items-start w-full  mt-4 pt-4 border-t border-gray-100">
              <AiButton
                onClick={() => handleGenerateQuestions(d.content)}
                label="Gerar Questões"
                isGenerating={generatingQuestions === d.content}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
