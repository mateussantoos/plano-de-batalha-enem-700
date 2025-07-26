import { useAppContext } from "../contexts/AppContext";
import SimuladoView from "./layout/modal/SimuladoView";

export default function SimuladoWrapper() {
  const {
    isSimuladoActive,
    simuladoQuestions,
    simuladoTitle,
    setIsSimuladoActive,
  } = useAppContext();

  if (!isSimuladoActive) return null;

  const handleFinish = () => {
    setIsSimuladoActive(false);
  };

  return (
    <SimuladoView
      questions={simuladoQuestions}
      title={simuladoTitle}
      onFinish={handleFinish}
    />
  );
}
