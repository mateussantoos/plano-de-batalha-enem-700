// src/pages/Simulados.tsx
import { useState } from "react";
import Card from "../components/Card";
import { generateBalancedSimulado } from "../services/enemAPI";
import type { EnemQuestionFromAPI } from "../types";
import Button from "../components/common/Button";

interface SimuladosProps {
  startSimulado: (questions: EnemQuestionFromAPI[], title: string) => void;
}

export default function Simulados({ startSimulado }: SimuladosProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSimulado = async (numQuestions: number) => {
    setIsLoading(true);
    try {
      const { questions, year } = await generateBalancedSimulado(numQuestions);
      startSimulado(questions, `Mini-Simulado (Baseado em ${year})`);
    } catch (error) {
      alert("Ocorreu um erro ao gerar o simulado.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="simulados" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-800">
          Gerador de Simulados
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-bold">
          Teste seus conhecimentos com simulados rápidos e balanceados.
        </p>
      </div>
      <Card className="p-6 max-w-lg mx-auto ">
        <h3 className="text-lg  text-center mb-4 uppercase font-black">
          Simulado Rápido
        </h3>
        <p className="text-center text-gray-600 mb-6 font-medium">
          Gere uma prova com 10 questões aleatórias com a proporção correta de
          cada matéria.
        </p>
        <Button
          onClick={() => handleGenerateSimulado(10)}
          isLoading={isLoading}
          className="text-sm"
        >
          Gerar Simulado de 10 Questões
        </Button>
      </Card>
    </section>
  );
}
