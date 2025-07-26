import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { EnemQuestionFromAPI } from "../types";

interface AppContextType {
  simuladoQuestions: EnemQuestionFromAPI[];
  simuladoTitle: string;
  isSimuladoActive: boolean;
  modalContent: ReactNode;
  modalVisible: boolean;
  setSimuladoQuestions: (questions: EnemQuestionFromAPI[]) => void;
  setSimuladoTitle: (title: string) => void;
  setIsSimuladoActive: (active: boolean) => void;
  setModalContent: (content: ReactNode) => void;
  setModalVisible: (visible: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [simuladoQuestions, setSimuladoQuestions] = useState<
    EnemQuestionFromAPI[]
  >([]);
  const [simuladoTitle, setSimuladoTitle] = useState<string>("");
  const [isSimuladoActive, setIsSimuladoActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const value = {
    simuladoQuestions,
    simuladoTitle,
    isSimuladoActive,
    modalContent,
    modalVisible,
    setSimuladoQuestions,
    setSimuladoTitle,
    setIsSimuladoActive,
    setModalContent,
    setModalVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
