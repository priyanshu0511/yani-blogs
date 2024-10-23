import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN3-coEBxt_HvLqgIaGiNm1IXk7JqQ_Q4",
  authDomain: "yani-blogs.firebaseapp.com",
  databaseURL: "https://yani-blogs-default-rtdb.firebaseio.com",
  projectId: "yani-blogs",
  storageBucket: "yani-blogs.appspot.com",
  messagingSenderId: "885935772622",
  appId: "1:885935772622:web:ce9fcc4c3d52812909d19f",
  measurementId: "G-1SJ6B4S5DS"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
