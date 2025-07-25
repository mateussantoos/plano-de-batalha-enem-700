import ReactMarkdown from "react-markdown";
import type { EnemQuestionFromAPI } from "../types";

interface SimuladoModalContentProps {
  title: string;
  questions: EnemQuestionFromAPI[];
}

export default function SimuladoModalContent({
  title,
  questions,
}: SimuladoModalContentProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {questions.map((q) => (
        <div
          key={`${q.year}-${q.index}`}
          className="mb-6 border-b pb-4 last:border-b-0"
        >
          <p className="font-semibold mb-2 text-sm text-gray-500">
            ENEM {q.year} - {q.discipline}
          </p>

          <div className="prose prose-sm max-w-none mb-4">
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => (
                  <img
                    className="max-w-full h-auto rounded-md mx-auto"
                    {...props}
                    alt="Imagem da questão"
                  />
                ),
              }}
            >
              {q.context || ""}
            </ReactMarkdown>
          </div>

          {/* CORREÇÃO: Renderizando o enunciado/prompt da questão */}
          {q.alternativesIntroduction && (
            <p className="font-semibold text-gray-800 my-4">
              {q.alternativesIntroduction}
            </p>
          )}

          <div className="space-y-2">
            {q.alternatives.map((opt) => (
              <div
                key={opt.letter}
                className="flex items-start p-2 rounded-md border text-left"
              >
                <span className="font-bold mr-2">{opt.letter})</span>
                <p className="text-sm">{opt.text}</p>
              </div>
            ))}
          </div>
          <details className="mt-4 bg-gray-100 p-2 rounded-md cursor-pointer">
            <summary className="font-semibold text-sm">Ver Resposta</summary>
            <p className="mt-2 text-sm">
              <strong>Resposta Correta:</strong> {q.correctAlternative}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
