import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAr_Fi7dXVi_-ok4B1dhK_ae2oQilUngzw",
  authDomain: "plataforma-restaurantes-b7b96.firebaseapp.com",
  projectId: "plataforma-restaurantes-b7b96",
  storageBucket: "plataforma-restaurantes-b7b96.firebasestorage.app",
  messagingSenderId: "282760299615",
  appId: "1:282760299615:web:3a190593a4d06343b707ea"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };