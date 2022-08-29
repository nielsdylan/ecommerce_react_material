import axios from 'axios'

const API_URL="http://127.0.0.1:8000/api/categorys";

export const getCategories = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log('No se pudo procesar error al obtener a todos las categorias',error.message);
    }
}