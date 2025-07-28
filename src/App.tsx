import Header from "./components/ui/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { AppProvider } from "./contexts/AppContext";
import Modal from "./components/layout/modal/Modal";
import SimuladoWrapper from "./components/SimuladoWrapper";
import { AuthProvider } from "./contexts/AuthContext";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <AuthProvider>
      <AppProvider>
        <div className="min-h-screen font-rounded  ">
          <div className="flex flex-col min-h-screen">
            {!isLoginPage && <Header />}
            <main className="container mx-auto p-4 md:p-8 flex-grow">
              <AppRoutes />
            </main>
          </div>
          <Modal />
          <SimuladoWrapper />
        </div>
      </AppProvider>
    </AuthProvider>
  );
}
