import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Overview from "./pages/Overview";
import Schedule from "./pages/Schedule";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import Simulados from "./pages/Simulados";
import SimuladoView from "./components/SimuladoView";
import type { View, EnemQuestionFromAPI } from "./types";

export default function App() {
  const [activeView, setActiveView] = useState<View>("visao-geral");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const [isSimuladoActive, setIsSimuladoActive] = useState(false);
  const [simuladoQuestions, setSimuladoQuestions] = useState<
    EnemQuestionFromAPI[]
  >([]);
  const [simuladoTitle, setSimuladoTitle] = useState("");

  const startSimulado = (questions: EnemQuestionFromAPI[], title: string) => {
    if (questions.length > 0) {
      setSimuladoQuestions(questions);
      setSimuladoTitle(title);
      setIsSimuladoActive(true);
    } else {
      // Se não houver questões, podemos mostrar um alerta ou modal
      alert(
        "Não foi possível gerar o simulado: nenhuma questão foi encontrada."
      );
    }
  };

  const showModalWithContent = (content: React.ReactNode) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const renderView = () => {
    switch (activeView) {
      case "simulados":
        return <Simulados startSimulado={startSimulado} />;
      case "cronograma":
        return <Schedule setModalContent={showModalWithContent} />;
      case "progresso":
        return <Progress startSimulado={startSimulado} />;
      case "recursos":
        return <Resources />;
      case "visao-geral":
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen">
      {isSimuladoActive ? (
        <SimuladoView
          questions={simuladoQuestions}
          title={simuladoTitle}
          onFinish={() => setIsSimuladoActive(false)}
        />
      ) : (
        <>
          <Header activeView={activeView} setActiveView={setActiveView} />
          <main className="container mx-auto p-4 md:p-8">{renderView()}</main>
          <Modal
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
          >
            {modalContent}
          </Modal>
        </>
      )}
    </div>
  );
}
