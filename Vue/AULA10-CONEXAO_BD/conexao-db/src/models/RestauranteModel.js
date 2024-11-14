import { db } from "@/firebase";
import {collection, doc, getDocs } from "firebase/firestore"

export default class RestauranteModel{
    static async getRestauranteById(id) {
        try {
            const docRef = doc(db, "restaurantes", id);
            const docSnap = await getDocs(docRef);
      
            if (docSnap.exists()) {
              return docSnap.data();
            } else {
              throw new Error("Restaurante não encontrado");
            }
          } catch (error) {
            console.error("Erro ao obter restaurante:", error);
            throw error;
        }
    }

    static async getAllRestaurantes() {
        try{
            const restaurantesCol = collection(db, "restaurantes");
            const snapshot = await getDocs(restaurantesCol);
            return snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
        }catch(error){
            console.error("Erro ao obter todos os restaurantes", error);
            throw error;
        }
    }



}