import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { View } from "../types";

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: View; label: string }[] = [
    { id: "visao-geral", label: "Visão Geral" },
    { id: "cronograma", label: "Cronograma" },
    { id: "simulados", label: "Simulados" },
    { id: "progresso", label: "Progresso" },
    { id: "recursos", label: "Recursos" },
  ];

  const handleNavClick = (view: View) => {
    setActiveView(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-3 border-gray-300 sticky top-0 z-30 antialiased">
      <div className="container mx-auto px-4">
        {/* Main header content */}
        <div className="flex justify-between items-center h-20">
          <h1 className="flex items-center gap-3 text-xl md:text-2xl text-gray-800 font-extrabold uppercase">
            <span className="text-3xl md:text-3xl">🎯</span>
            <div>
              <span>Plano de Batalha</span>{" "}
              <span className="block sm:inline text-green-600 font-black">
                ENEM 700+
              </span>
            </div>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-4 md:space-x-6 text-sm md:text-base font-black">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`uppercase tracking-wide cursor-pointer text-neutral-500 hover:text-green-600 transition-colors duration-200 ${
                  activeView === item.id ? "text-green-600" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              className="p-2 rounded-2xl border-3 border-gray-300 bg-gray-50 text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="sm:hidden pb-4">
            <nav className="flex flex-col items-center space-y-4 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-2 text-center uppercase tracking-wide cursor-pointer  text-gray-500 hover:text-green-600 transition-colors duration-200 ${
                    activeView === item.id
                      ? "text-green-600 font-black"
                      : "font-bold"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
