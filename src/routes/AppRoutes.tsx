import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Simulados from "../pages/Simulados";
import Schedule from "../pages/Schedule";
import Progress from "../pages/Progress";
import Resources from "../pages/Resources";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<Overview />} />
      <Route path="/simulados" element={<Simulados />} />
      <Route path="/cronograma" element={<Schedule />} />
      <Route path="/progresso" element={<Progress />} />
      <Route path="/recursos" element={<Resources />} />
      <Route path="/visao-geral" element={<Overview />} />
    </Routes>
  );
};
