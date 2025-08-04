import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import type { MaterialDocument } from "../types";

/**
 * Busca todos os materiais de uma determinada coleção no Firestore.
 * @param subjectCollection - O nome da coleção (ex: "guia_enem_matematica").
 */
export const getMaterials = async (
  subjectCollection: string
): Promise<MaterialDocument[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, subjectCollection));
    const materials: MaterialDocument[] = [];
    querySnapshot.forEach((doc) => {
      materials.push({
        id: doc.id,
        ...doc.data(),
      } as MaterialDocument);
    });
    console.log(`Materiais de '${subjectCollection}' carregados:`, materials);
    return materials;
  } catch (error) {
    console.error(
      `Erro ao buscar materiais da coleção '${subjectCollection}':`,
      error
    );
    return [];
  }
};
