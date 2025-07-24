// src/components/ChartComponent.tsx
import Chart from "chart.js/auto";
import type { Chart as ChartJS, ChartData } from "chart.js";
import { studyData } from "../constants/studyData";
import { useEffect, useRef } from "react";

export default function ChartComponent() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data:
          studyData.overview && "strategyMatrix" in studyData.overview
            ? (studyData.overview.strategyMatrix as ChartData<
                "bar",
                number[],
                string
              >)
            : { labels: [], datasets: [] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true },
            x: { ticks: { autoSkip: false, maxRotation: 90, minRotation: 45 } },
          },
        },
      });
    }
    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] max-h-[50vh]">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
