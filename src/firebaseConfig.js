
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


  
const firebaseConfig = {
  apiKey: "AIzaSyDv7UWUB27W2iTFruEGxtKXeN2U-0oXPxc",
  authDomain: "vlasteel.firebaseapp.com",
  projectId: "vlasteel",
  storageBucket: "vlasteel.appspot.com",
  messagingSenderId: "562214899584",
  appId: "1:562214899584:web:9f570211f23988e678fb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

