import { db } from "./firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

/**
 * Retorna se o dia está concluído para o usuário
 * @param userId string
 * @param dayId string
 */
export async function getUserDayCompletion(
  userId: string,
  dayId: string
): Promise<boolean> {
  const ref = doc(db, "userProgress", userId, "days", dayId);
  const snap = await getDoc(ref);
  return snap.exists() ? !!snap.data().completed : false;
}

/**
 * Alterna o estado de conclusão do dia para o usuário
 * @param userId string
 * @param dayId string
 * @param completed boolean
 */
export async function setUserDayCompletion(
  userId: string,
  dayId: string,
  completed: boolean
): Promise<void> {
  const ref = doc(db, "userProgress", userId, "days", dayId);
  if (completed) {
    await setDoc(ref, { completed: true }, { merge: true });
  } else {
    // Remove o campo completed ou o documento
    await deleteDoc(ref);
  }
}
