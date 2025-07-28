import { Routes, Route, Navigate } from "react-router-dom";
import Overview from "../pages/Overview";
import Simulados from "../pages/Simulados";
import Schedule from "../pages/Schedule";
import Progress from "../pages/Progress";
import Resources from "../pages/Resources";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthContext";
import type { ReactElement } from "react";

function PrivateRoute({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-rounded text-xl font-bold text-duo-green">
        Carregando...
      </div>
    );
  }
  return user ? children : <Navigate to="/login" replace />;
}

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota de Login */}
      <Route path="/login" element={<Login />} />
      {/* Rotas Protegidas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        }
      />
      <Route
        path="/simulados"
        element={
          <PrivateRoute>
            <Simulados />
          </PrivateRoute>
        }
      />
      <Route
        path="/cronograma"
        element={
          <PrivateRoute>
            <Schedule />
          </PrivateRoute>
        }
      />
      <Route
        path="/progresso"
        element={
          <PrivateRoute>
            <Progress />
          </PrivateRoute>
        }
      />
      <Route
        path="/recursos"
        element={
          <PrivateRoute>
            <Resources />
          </PrivateRoute>
        }
      />
      <Route
        path="/visao-geral"
        element={
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        }
      />
      {/* Redirecionamento para rota padrão */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
