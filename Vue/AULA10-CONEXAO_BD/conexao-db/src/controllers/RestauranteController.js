import RestauranteModel from "@/models/RestauranteModel";

export default class RestauranteController{
    static async buscarRestaurante(id){
        try{
            return await RestauranteModel.getRestauranteById(id);
        }catch(error){
            console.error("Erro ao obter o restaurante", error);
            throw error;
        }
    }

    static async buscarTodosRestaurantes(){
        try{
            return await RestauranteModel.getAllRestaurantes();
        }catch(error){
            console.error("Erro ao obter todos os restaurante", error);
            throw error;
        }
    }

}