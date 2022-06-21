import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBw1ja-u5ttPZ86OKtTcrb--pbWzPJh58w",
    authDomain: "champion-equipment.firebaseapp.com",
    projectId: "champion-equipment",
    storageBucket: "champion-equipment.appspot.com",
    messagingSenderId: "222778814480",
    appId: "1:222778814480:web:986ef79153a56413191a95"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth