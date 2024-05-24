import axios from "axios";


const BASE_URL = 'https://portfolio-shahar-default-rtdb.asia-southeast1.firebasedatabase.app';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postData = async (path: string, data: any) => {
    try {
        const response = await axiosInstance.post(`${path}.json`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};