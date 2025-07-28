import { useAppContext } from "../../../contexts/AppContext";
import { useEffect } from "react";

export default function Modal() {
  const { modalVisible, modalContent, setModalVisible } = useAppContext();

  // Título padrão do modal
  const modalTitle = "📚 Conteúdo";

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalVisible]);

  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto scrollbar-hide border-2 sm:border-4 border-gray-100">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-gray-800 uppercase tracking-wide">
              {modalTitle}
            </h2>
            <button
              onClick={() => setModalVisible(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl font-bold hover:bg-gray-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              ×
            </button>
          </div>
          {modalContent}
        </div>
      </div>
    </div>
  );
}
