// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4rsN8LIJvVap0dwYsUU72ymZ2MGnOiWw",
    authDomain: "gb-react-f279c.firebaseapp.com",
    databaseURL: "https://gb-react-f279c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-f279c",
    storageBucket: "gb-react-f279c.appspot.com",
    messagingSenderId: "17134726880",
    appId: "1:17134726880:web:fa5ebfdb8e94d53c116a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
