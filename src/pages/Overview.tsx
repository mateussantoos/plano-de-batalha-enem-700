// src/pages/Overview.tsx
import { studyData } from "../constants/studyData";
import Card from "../components/Card";
import ChartComponent from "../components/ChartComponent";

export default function Overview() {
  return (
    <section id="visao-geral" className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {studyData.overview.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
          {studyData.overview.intro}
        </p>
      </div>
      <Card className="p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Matriz Estratégica: Incidência vs. Amigabilidade-TRI
        </h3>
        <ChartComponent />
        <p className="text-center text-sm text-gray-500 mt-4">
          Foque nos tópicos com alta incidência e alta amigabilidade primeiro.
        </p>
      </Card>
    </section>
  );
}
