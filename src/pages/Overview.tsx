import { studyData } from "../constants/studyData";
import Card from "../components/Card";
import ChartComponent from "../components/ChartComponent";
import {
  CalendarDays,
  ClipboardCheck,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { View } from "../types";

interface OverviewProps {
  setActiveView: (view: View) => void;
}

const navCards: {
  id: View;
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "cronograma", label: "Cronograma", icon: CalendarDays },
  { id: "simulados", label: "Simulados", icon: ClipboardCheck },
  { id: "progresso", label: "Progresso", icon: TrendingUp },
  { id: "recursos", label: "Recursos", icon: BookOpen },
];

export default function Overview({ setActiveView }: OverviewProps) {
  return (
    <section id="visao-geral" className="space-y-12 animate-fade-in">
      {/* Título e Introdução */}
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-800">
          {studyData.overview.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-semibold tracking-wide leading-relaxed">
          {studyData.overview.intro}
        </p>
      </div>

      {/* Grid com Cards de Navegação */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {navCards.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className="w-full text-left rounded-xl transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <Card className="flex h-56 flex-col items-center justify-center p-6 text-center text-gray-800">
                <Icon className="mb-4 h-20 w-20 stroke-1 text-green-600" />
                <h3 className="text-xl font-bold">{item.label}</h3>
              </Card>
            </button>
          );
        })}
      </div>

      {/* Card Principal com o Gráfico (não clicável) */}
      <Card className="p-4 md:p-6">
        <h3 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Matriz Estratégica: Incidência vs. Amigabilidade-TRI
        </h3>
        <ChartComponent />
        <p className="mt-4 text-center text-sm text-gray-500">
          Foque nos tópicos com alta incidência e alta amigabilidade primeiro.
        </p>
      </Card>
    </section>
  );
}
