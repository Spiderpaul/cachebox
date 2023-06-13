import axios from "axios"

//Métodos GET
export const fetchDataUsuario = async () => {
    try{
        const response = await axios.get("http://localhost:8080/usuario");
        return response.data;
    } catch (error){
        console.log("Error fetching usuario:", error);
    }
};

export const fetchDataCategoria = async () => {
    try{
        const response = await axios.get("http://localhost:8080/categoria");
        return response.data;
    } catch (error){
        console.log("Error fetching categoría:", error);
    }
}

export const fetchDataVideo = async () => {
    try{
        const response = await axios.get("http://localhost:8080/categoria");
        return response.data;
    }catch(error){
        console.log("Error fetching video:", error)
    }
}


