// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChrKTIn6TdBtPI-Wy0E5DYbdVqA6gr9N4",
  authDomain: "learning-management-syst-14f66.firebaseapp.com",
  projectId: "learning-management-syst-14f66",
  storageBucket: "learning-management-syst-14f66.appspot.com",
  messagingSenderId: "779614275495",
  appId: "1:779614275495:web:8041456afca77eab755882",
  measurementId: "G-0LJ79KFQ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);