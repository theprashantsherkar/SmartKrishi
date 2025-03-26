import { initializeApp } from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCVHXr_BqNO536tlqrCXo5n01NdbE2zDn4",
    authDomain: "ipd2024-25.firebaseapp.com",
    projectId: "ipd2024-25",
    storageBucket: "ipd2024-25.firebasestorage.app",
    messagingSenderId: "202705833241",
    appId: "1:202705833241:web:74c524c07c6736fe508988",
    measurementId: "G-TEBMB16JXX"
};


export const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);

export { database, ref, onValue };
