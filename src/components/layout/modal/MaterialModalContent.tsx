import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { MaterialTopic, StudyMaterialContent } from "../../../types";
import { generateStudyMaterial } from "../../../services/gemini";
import { Loader } from "../../Loader";

interface MaterialModalContentProps {
  topic: MaterialTopic;
}

export default function MaterialModalContent({
  topic,
}: MaterialModalContentProps) {
  const [generatedContent, setGeneratedContent] =
    useState<StudyMaterialContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const content = await generateStudyMaterial(topic.topico);
        setGeneratedContent(content);
      } catch (err) {
        setError(
          "Ops! 😢 Não consegui gerar o material de estudo agora. Tente novamente em alguns instantes!"
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, [topic.topico]);

  const getVideoId = (url: string): string | null => {
    // Adicionado o tipo de retorno para clareza
    if (typeof url !== "string") return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // AJUSTE: Processa a lista de vídeos para extrair os IDs válidos
  const validVideoIds =
    topic.videos
      ?.map((url) => getVideoId(url))
      .filter((id): id is string => id !== null) || [];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center p-10">
          <Loader />
          <p className="mt-4 font-semibold text-gray-500">
            A IA está preparando sua aula... 😎
          </p>
        </div>
      );
    }

    if (error || !generatedContent) {
      return <p className="text-center font-semibold text-red-500">{error}</p>;
    }

    const proseClasses =
      "prose prose-lg max-w-none text-gray-700 leading-relaxed prose-p:text-justify prose-p:mb-6 prose-p:whitespace-pre-wrap prose-strong:font-extrabold prose-strong:text-gray-800 prose-h1:text-3xl prose-h1:font-black prose-h1:mb-6 prose-h1:text-gray-800 prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:text-gray-800 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:text-gray-700 prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-blockquote:my-6 prose-hr:my-8 prose-pre:my-6 prose-code:my-2";

    return (
      <div className="space-y-8">
        <div
          className={`${proseClasses} p-6 bg-blue-50 rounded-xl border-2 border-blue-200 space-y-4`}
        >
          <h2 className="text-2xl font-black text-blue-800 mb-4">
            📖 Introdução
          </h2>
          <div className="space-y-4">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {generatedContent.introduction}
            </ReactMarkdown>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-gray-800 mb-6 text-center">
            🎯 Conceitos Principais
          </h2>
          {generatedContent.coreConcepts.map((concept, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center">
                {concept.title}
              </h3>
              <div className={`${proseClasses} space-y-4`}>
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {concept.explanation}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
          <h2 className="text-2xl font-black text-green-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              🧠
            </span>
            Exemplo Prático
          </h2>
          <div className={`${proseClasses} space-y-6`}>
            <div className="mb-6 space-y-4">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Descrição do Problema:
              </h3>
              <div className="space-y-4">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {generatedContent.practicalExample.description}
                </ReactMarkdown>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-300 space-y-4">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Resolução:
              </h3>
              <div className="space-y-4">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {generatedContent.practicalExample.resolution}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
          <h2 className="text-2xl font-black text-yellow-800 mb-4 flex items-center">
            <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              🎯
            </span>
            Dica de Ouro para o ENEM
          </h2>
          <div className={`${proseClasses} space-y-4`}>
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {generatedContent.enemTip}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-black text-gray-800 mb-2">
          {topic.topico}
        </h3>
        <div className="w-16 h-1 bg-duo-green-dark mx-auto rounded-full"></div>
      </div>

      {/* AJUSTE: Renderiza a lista de vídeos */}
      {validVideoIds.length > 0 && (
        <div className="mb-8 space-y-6">
          <h4 className="text-xl font-black text-gray-800 uppercase tracking-wide text-center">
            Aulas em Vídeo 🎥
          </h4>
          {validVideoIds.map((id) => (
            <div
              key={id}
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Vídeo sobre ${topic.topico}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
        <h4 className="text-xl font-black text-gray-800 mb-4 uppercase tracking-wide">
          📚 Explicação com IA
        </h4>
        {renderContent()}
      </div>
    </div>
  );
}
