import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChh08hT0YMwxbVRhxEQjivG8oNU0Y8Zw0",
  authDomain: "genious-car-mechanics-center.firebaseapp.com",
  projectId: "genious-car-mechanics-center",
  storageBucket: "genious-car-mechanics-center.appspot.com",
  messagingSenderId: "641624279900",
  appId: "1:641624279900:web:892bdd946757e9c15e0f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;