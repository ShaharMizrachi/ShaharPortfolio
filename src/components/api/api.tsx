import axios from "axios";

const FIREBASE_REALTIME_DATABASE_URL = 'https://portfolio-shahar-b96a5-default-rtdb.europe-west1.firebasedatabase.app';
const COLLECTION_NAME = 'your_collection_name'; // Replace with your Firestore collection name

const axiosInstance = axios.create({
    baseURL: FIREBASE_REALTIME_DATABASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postData = async (path: string, data: any) => {
    try {
        const responseFirebaseRealtimeDB = await axiosInstance.post(`${path}.json`, data);
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
