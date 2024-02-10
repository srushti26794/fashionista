// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFaW2TbK7ye13Kl_5oGvUQfzRZ7uoIJB0",
  authDomain: "fashionista-edc2f.firebaseapp.com",
  projectId: "fashionista-edc2f",
  storageBucket: "fashionista-edc2f.appspot.com",
  messagingSenderId: "713446720244",
  appId: "1:713446720244:web:f8ae4472cfaa6d65afd4a1",
  measurementId: "G-8SW9RW9DEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);