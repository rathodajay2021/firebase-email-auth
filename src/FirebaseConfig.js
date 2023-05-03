// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCrcPEfFR-S7iAFt0oPFqnolD0QdNHiE",
  authDomain: process.env.FIREBASE_EMAIL_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_EMAIL_AUTH_PROJECT_ID,
  storageBucket: process.env.FIREBASE_EMAIL_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_EMAIL_AUTH_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_EMAIL_AUTH_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
