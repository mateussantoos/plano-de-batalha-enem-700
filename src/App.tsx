import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Overview from "./pages/Overview";
import Schedule from "./pages/Schedule";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import type { View } from "./types";

export default function App() {
  const [activeView, setActiveView] = useState<View>("visao-geral");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const showModalWithContent = (content: React.ReactNode) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const renderView = () => {
    switch (activeView) {
      case "cronograma":
        return <Schedule setModalContent={showModalWithContent} />;
      case "progresso":
        return <Progress setModalContent={showModalWithContent} />;
      case "recursos":
        return <Resources />;
      case "visao-geral":
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="container mx-auto p-4 md:p-8">{renderView()}</main>
      <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}
