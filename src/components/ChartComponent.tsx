import Chart from "chart.js/auto";
import type { Chart as ChartJS, ChartData, ChartOptions } from "chart.js";
import { studyData } from "../constants/studyData";
import { useEffect, useRef } from "react";

// Função para buscar e estilizar os dados do gráfico
const getStyledChartData = (): ChartData<"bar", number[], string> => {
  const chartData = studyData?.overview?.strategyMatrix as
    | ChartData<"bar", number[], string>
    | undefined;

  if (!chartData) {
    return { labels: [], datasets: [] };
  }

  const duolingoColors = [
    "#58cc02",
    "#1cb0f6",
    "#ffc800",
    "#ff4b4b",
    "#af42ff",
  ];

  const datasets = chartData.datasets.map((dataset, index) => ({
    ...dataset,
    backgroundColor: duolingoColors[index % duolingoColors.length],
    borderRadius: 8,
    borderSkipped: false,
  }));

  return { ...chartData, datasets };
};

export default function ChartComponent() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current?.destroy();

      const data = getStyledChartData();

      const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#2d3748",
            bodyFont: {
              family: "'M PLUS Rounded 1c', sans-serif",
              weight: "bold",
            },
            titleFont: {
              family: "'M PLUS Rounded 1c', sans-serif",
              weight: "bold",
            },
            padding: 12,
            cornerRadius: 12,
            displayColors: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "#e2e8f0" },
            ticks: {
              color: "#718096",
              font: {
                family: "'M PLUS Rounded 1c', sans-serif",
                weight: "bold",
                size: 12,
              },
              padding: 10,
            },
          },
          x: {
            grid: { color: "#e2e8f0" },
            ticks: {
              color: "#718096",
              font: {
                family: "'M PLUS Rounded 1c', sans-serif",
                weight: "bold",
                size: 12,
              },
            },
          },
        },
      };

      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] max-h-[50vh] p-4 bg-white rounded-xl border-2 border-gray-200">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
