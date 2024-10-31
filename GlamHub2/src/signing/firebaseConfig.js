import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAugNNB5e4wi6yO_oBJB94bzRMUXS8wDDY",
    authDomain: "glamhub-14374.firebaseapp.com",
    projectId: "glamhub-14374",
    storageBucket: "glamhub-14374.appspot.com",
    messagingSenderId: "810256626632",
    appId: "1:810256626632:web:48b7b477682102141e86fd",
    // measurementId: "G-X0EGF2T6TB"
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export { auth, db };