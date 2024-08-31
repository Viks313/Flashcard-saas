// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct import

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Oqf209dCzBXTiDcJqJcL53YdEI7-hXA",
  authDomain: "flashcardsaas-9af09.firebaseapp.com",
  projectId: "flashcardsaas-9af09",
  storageBucket: "flashcardsaas-9af09.appspot.com",
  messagingSenderId: "94431978050",
  appId: "1:94431978050:web:d689f85b3aaacde57c83db",
  measurementId: "G-XCGF6HBQLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') { // Ensure this runs only in the browser
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
const db = getFirestore(app); // Correct function call

export { db,analytics };
