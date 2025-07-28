import { useState } from "react";
import { studyData } from "../constants/studyData";
import { generateRepertoire } from "../services/gemini";
import { generateBalancedSimulado } from "../services/enemAPI";
import Card from "../components/Card";
import Button from "../components/common/Button";
import { useAppContext } from "../contexts/AppContext";

export default function Progress() {
  const [generatingRepertoire, setGeneratingRepertoire] = useState<
    string | null
  >(null);
  const [generatingSimulado, setGeneratingSimulado] = useState<number | null>(
    null
  );
  const {
    setModalContent,
    setModalVisible,
    setSimuladoQuestions,
    setSimuladoTitle,
    setIsSimuladoActive,
  } = useAppContext();

  const handleGenerateRepertoire = async (theme: string) => {
    setGeneratingRepertoire(theme);
    try {
      const data = await generateRepertoire(theme);
      const formattedText = data
        .replace(/\n/g, "<br />")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      setModalContent(
        <div>
          <h3 className="text-xl font-bold mb-4">Repertório para "{theme}"</h3>
          <div
            className="text-gray-700 space-y-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        </div>
      );
      setModalVisible(true);
    } catch (error) {
      console.error("Erro ao gerar repertório:", error);
      setModalContent(
        <p className="text-red-500">
          Erro ao gerar repertório. Tente novamente.
        </p>
      );
      setModalVisible(true);
    } finally {
      setGeneratingRepertoire(null);
    }
  };

  const handleGenerateSimulado = async (numQuestions: number, week: number) => {
    setGeneratingSimulado(week);
    try {
      const { questions, year } = await generateBalancedSimulado(numQuestions);
      setSimuladoQuestions(questions);
      setSimuladoTitle(`Simulado - Semana ${week} (Baseado em ${year})`);
      setIsSimuladoActive(true);
    } catch (error) {
      alert(`Ocorreu um erro ao gerar o simulado da Semana ${week}.`);
    } finally {
      setGeneratingSimulado(null);
    }
  };

  return (
    <section id="progresso" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl  text-gray-800 font-black">
          {studyData.progress.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-bold">
          {studyData.progress.intro}
        </p>
      </div>
      <div className="space-y-6">
        {studyData.progress.milestones.map((item) => {
          const numQuestoesMatch = item.simulation.match(/\d+/);
          const numQuestoes = numQuestoesMatch
            ? parseInt(numQuestoesMatch[0], 10)
            : 0;
          return (
            <Card key={item.week} className="p-5">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex-grow mb-4 md:mb-0 md:pr-4">
                  <p className="text-sm font-bold text-duo-blue">
                    SEMANA {item.week}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 mt-1">
                    {item.theme}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Foco:</span> {item.skill} |{" "}
                    <span className="font-semibold">Simulado:</span>{" "}
                    {item.simulation}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto flex flex-col md:flex-row gap-2">
                  <Button
                    onClick={() => handleGenerateRepertoire(item.theme)}
                    isGenerating={generatingRepertoire === item.theme}
                  >
                    Gerar Repertório
                  </Button>
                  {numQuestoes > 0 && (
                    <Button
                      onClick={() =>
                        handleGenerateSimulado(numQuestoes, item.week)
                      }
                      isGenerating={generatingSimulado === item.week}
                      variant="secondary"
                    >{`Gerar Simulado (${numQuestoes}Q)`}</Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
