import {initializeApp} from "firebase/app";
import {getFirestore, getfirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyDjP6zmsi0XuGCr-uFR8YXQJ68iBWXjrgo",

  authDomain: "chatbot-7d623.firebaseapp.com",

  projectId: "chatbot-7d623",

  storageBucket: "chatbot-7d623.appspot.com",

  messagingSenderId: "724485793059",

  appId: "1:724485793059:web:d513cb29b7fb549a965896",

  measurementId: "G-Q4767VQMJ9"

};

// initialize firebase
const app = initializeApp(firebaseConfig);
const analytic = getAnalytics(app);
const db = getFirestore(app);



export {db};

