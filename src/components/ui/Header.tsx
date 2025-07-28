import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import type { View } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const navItems: { id: View; label: string; link: string }[] = [
    { id: "visao-geral", label: "Visão Geral", link: "/" },
    { id: "cronograma", label: "Cronograma", link: "/cronograma" },
    { id: "simulados", label: "Simulados", link: "/simulados" },
    { id: "progresso", label: "Progresso", link: "/progresso" },
    { id: "recursos", label: "Recursos", link: "/recursos" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
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
              <span className="block sm:inline text-duo-green font-black">
                ENEM 700+
              </span>
            </div>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-4 md:space-x-6 text-sm md:text-base font-black items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`focus:text-duo-green uppercase tracking-wide cursor-pointer text-neutral-500 hover:text-duo-green transition-colors duration-200 text-nowrap`}
                onClick={() => navigate(item.link)}
              >
                {item.label}
              </button>
            ))}
            {user && (
              <Button
                variant="danger"
                onClick={handleLogout}
                isLoading={loading}
                icon={<LogOut className="w-5 h-5" />}
                className="w-auto px-4 py-2 ml-4"
              >
                Sair
              </Button>
            )}
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
                  className={`focus:text-duo-green focus:font-black w-full py-2 text-center uppercase tracking-wide cursor-pointer  text-gray-500 hover:text-duo-green transition-colors duration-200 font-bold`}
                  onClick={() => navigate(item.link)}
                >
                  {item.label}
                </button>
              ))}
              {user && (
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  isLoading={loading}
                  icon={<LogOut className="w-5 h-5" />}
                  className="w-auto px-4 py-2 mt-2"
                >
                  Sair
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
