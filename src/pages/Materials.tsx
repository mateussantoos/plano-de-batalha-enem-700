import { useState, useEffect, useMemo } from "react";
import { getMaterials } from "../services/materialService";
import type { MaterialDocument, MaterialTopic } from "../types";
import Card from "../components/Card";
import { Loader } from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import MaterialModalContent from "../components/layout/modal/MaterialModalContent";
import { BookText, Search } from "lucide-react";

export default function Materials() {
  const [materials, setMaterials] = useState<MaterialDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { setModalContent, setModalVisible } = useAppContext();

  useEffect(() => {
    const fetchMaterials = async () => {
      setIsLoading(true);
      const mathMaterials = await getMaterials("matematica");

      // AJUSTE: Ordenando os materiais pelo campo 'order' numérico
      const sortedMaterials = mathMaterials.sort((a, b) => a.order - b.order);

      setMaterials(sortedMaterials);
      setIsLoading(false);
    };
    fetchMaterials();
  }, []);

  const filteredMaterials = useMemo(() => {
    if (!searchTerm.trim()) {
      return materials;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return materials
      .map((material) => {
        const filteredTopics = material.topicos_lista.filter((topic) =>
          topic.topico.toLowerCase().includes(lowerCaseSearch)
        );
        if (filteredTopics.length > 0) {
          return { ...material, topicos_lista: filteredTopics };
        }
        if (material.materia.toLowerCase().includes(lowerCaseSearch)) {
          return material;
        }
        return null;
      })
      .filter((material): material is MaterialDocument => material !== null);
  }, [searchTerm, materials]);

  const handleTopicClick = (topic: MaterialTopic) => {
    setModalContent(<MaterialModalContent topic={topic} />);
    setModalVisible(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <section id="materiais" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-800">
          Guia de Estudos de Matemática
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-semibold">
          Explore os conteúdos e receba uma aula particular da nossa IA.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar por matéria ou tópico..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 shadow-sm focus:border-duo-blue focus:ring-1 focus:ring-duo-blue transition font-semibold"
        />
      </div>

      <div className="space-y-6">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((material) => (
            <Card key={material.id} className="p-6">
              <h3 className="text-2xl font-black text-gray-800 mb-4">
                {material.materia}
              </h3>
              <ul className="space-y-2">
                {material.topicos_lista.map((topic) => (
                  <li key={topic.topico}>
                    <button
                      onClick={() => handleTopicClick(topic)}
                      className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                    >
                      <BookText className="w-5 h-5 text-duo-blue flex-shrink-0" />
                      <span className="font-bold text-gray-700">
                        {topic.topico}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          ))
        ) : (
          <Card className="text-center py-12 px-6">
            <p className="text-gray-500 font-bold text-lg">
              Nenhum material encontrado para "{searchTerm}".
            </p>
            <p className="text-gray-400 mt-2">
              Tente ajustar sua busca ou explore outros termos.
            </p>
          </Card>
        )}
      </div>
    </section>
  );
}
