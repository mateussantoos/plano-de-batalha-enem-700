// src/components/Header.tsx
import type { View } from "../types";

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const navItems: { id: View; label: string }[] = [
    { id: "visao-geral", label: "Visão Geral" },
    { id: "cronograma", label: "Cronograma" },
    { id: "progresso", label: "Progresso" },
    { id: "recursos", label: "Recursos" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
            🎯 Plano de Batalha{" "}
            <span className="text-[#3a86ff]">ENEM 700+</span>
          </h1>
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-base font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`nav-link ${activeView === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
