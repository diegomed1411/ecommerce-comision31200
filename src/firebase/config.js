// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6h-B3aS1ip3o7U1fA5e192w9ZBe6hp0c",
  authDomain: "ecommerce-viajes-medina.firebaseapp.com",
  projectId: "ecommerce-viajes-medina",
  storageBucket: "ecommerce-viajes-medina.appspot.com",
  messagingSenderId: "344368191522",
  appId: "1:344368191522:web:bc6e5cd39575818c14927b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}

