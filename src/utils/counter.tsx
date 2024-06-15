import { useEffect } from "react";
import { postData } from "../components/api/api";

const generateUniqueIdentifier = (): string => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16);
    });
};

const countToDb = async () => {
    try {
        const storageKey: string = 'uniqueUserIdentifier';
        let userIdentifierFromLocalStorage = localStorage.getItem(storageKey);
        let userIdentifierFromSessionStorage = sessionStorage.getItem(storageKey)
        let userIdentifier: string;

        if (!userIdentifierFromSessionStorage) {
            if (!userIdentifierFromLocalStorage) {
                userIdentifier = generateUniqueIdentifier();
                localStorage.setItem(storageKey, userIdentifier);
            }
            else {
                userIdentifier = userIdentifierFromLocalStorage;
            }
            sessionStorage.setItem(storageKey, userIdentifier)

            const date = new Date();
            const formatter = new Intl.DateTimeFormat('he-IL', {
                timeZone: 'Asia/Jerusalem',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false

            });
            const localTime = formatter.format(date);
            const response = await postData('/visitorCount', { VisitorId: userIdentifier, VisitorDate: localTime });
            console.log('Visitor counted:', response);
            console.log('userIdentifier:', userIdentifier)
        }

    } catch (error) {
        console.error("Visitor did not count:", error);
    }
};

const UserCounter: React.FC = () => {
    useEffect(() => {
        countToDb();
    }, []);

    return null;
};

export default UserCounter;



// for pulling the data
// const dateTimeString = "14.06.2024, 16:45:42"; // Example formatted string

// // Split the date and time parts
// const [datePart, timePart] = dateTimeString.split(', ');

// // Split the date into day, month, year
// const [day, month, year] = datePart.split('.').map(Number);

// // Split the time into hours, minutes, seconds
// const [hours, minutes, seconds] = timePart.split(':').map(Number);

// console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
// console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
