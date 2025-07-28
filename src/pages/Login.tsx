import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/common/Button";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/", { replace: true });
    } catch (err: any) {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-md p-8 ">
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-2xl font-extrabold text-gray-800 mb-1 uppercase tracking-wider">
            Entrar
          </h2>
          <span className="text-duo-green font-black text-lg">ENEM 700+</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-duo-green text-gray-700 font-semibold bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Senha"
            className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-duo-green text-gray-700 font-semibold bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-600 text-sm font-bold text-center">
              {error}
            </div>
          )}
          <Button type="submit" isLoading={loading} variant="primary">
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
