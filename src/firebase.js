import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd_T4VwkQgqp_DxSaRVlzfM218TOjfcxc",
  authDomain: "expense-tracker-304f7.firebaseapp.com",
  projectId: "expense-tracker-304f7",
  storageBucket: "expense-tracker-304f7.appspot.com",
  messagingSenderId: "153766137743",
  appId: "1:153766137743:web:cbff80dd4b9a7a9aee45fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { doc, setDoc };