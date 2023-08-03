import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIsKjl_Ojux9V5AsAZE59qJhkJk9jplxA",
  authDomain: "netflix-detailed.firebaseapp.com",
  projectId: "netflix-detailed",
  storageBucket: "netflix-detailed.appspot.com",
  messagingSenderId: "391784962080",
  appId: "1:391784962080:web:6cfdd8eaff43580d5ec445"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
