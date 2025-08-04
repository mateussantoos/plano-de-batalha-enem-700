import { useState } from "react";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import type { View } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const navItems: { id: View; label: string; link: string }[] = [
    { id: "visao-geral", label: "Visão Geral", link: "/" },
    { id: "cronograma", label: "Cronograma", link: "/cronograma" },
    { id: "materiais", label: "Materiais", link: "/materiais" },
    { id: "simulados", label: "Simulados", link: "/simulados" },
    { id: "progresso", label: "Progresso", link: "/progresso" },
    { id: "recursos", label: "Recursos", link: "/recursos" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  // Função para alterar senha
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordError("");
    setPasswordSuccess("");
    try {
      // Firebase Auth: updatePassword
      const { updatePassword } = await import("firebase/auth");
      const currentUser = (await import("../../services/firebase")).auth
        .currentUser;
      if (!currentUser) throw new Error("Usuário não autenticado");
      await updatePassword(currentUser, newPassword);
      setPasswordSuccess("Senha alterada com sucesso!");
      setNewPassword("");
    } catch (err: any) {
      setPasswordError(err.message || "Erro ao alterar senha");
    } finally {
      setPasswordLoading(false);
    }
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
              <>
                <button
                  className="ml-2 p-2 rounded-full border-2 border-gray-200 hover:bg-gray-100 transition-colors"
                  onClick={() => setShowProfile(true)}
                  aria-label="Perfil"
                >
                  <UserIcon className="w-6 h-6 text-duo-blue" />
                </button>
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  isLoading={loading}
                  icon={<LogOut className="w-5 h-5" />}
                  className="w-auto px-4 py-2 ml-4"
                >
                  Sair
                </Button>
              </>
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
                <>
                  <button
                    className="mt-2 p-2 rounded-full border-2 border-gray-200 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowProfile(true)}
                    aria-label="Perfil"
                  >
                    <UserIcon className="w-6 h-6 text-duo-blue" />
                  </button>
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    isLoading={loading}
                    icon={<LogOut className="w-5 h-5" />}
                    className="w-auto px-4 py-2 mt-2"
                  >
                    Sair
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      {/* Modal de Perfil */}
      {showProfile && user && (
        <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-8 mx-5 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => {
                setShowProfile(false);
                setPasswordError("");
                setPasswordSuccess("");
                setNewPassword("");
              }}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-duo-blue">Perfil</h2>
            <div className="mb-4">
              <span className="font-semibold">E-mail:</span>
              <span className="ml-2 text-gray-700">{user.email}</span>
            </div>
            <form onSubmit={handleChangePassword} className="space-y-3">
              <label className="block font-semibold">Alterar senha:</label>
              <input
                type="password"
                className="border-2 border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-duo-blue"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={6}
                required
              />
              {passwordError && (
                <div className="text-red-600 text-sm font-bold">
                  {passwordError}
                </div>
              )}
              {passwordSuccess && (
                <div className="text-green-600 text-sm font-bold">
                  {passwordSuccess}
                </div>
              )}
              <Button
                type="submit"
                isLoading={passwordLoading}
                variant="primary"
                className="w-full"
              >
                Salvar nova senha
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
