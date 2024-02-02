import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqX2SVGF1KyxzKDu07t6vCG_AukE01zs",
  authDomain: "sample-ecommerce-store.firebaseapp.com",
  projectId: "sample-ecommerce-store",
  storageBucket: "sample-ecommerce-store.appspot.com",
  messagingSenderId: "840555226381",
  appId: "1:840555226381:web:a068105d62aef9171cfc44",
  measurementId: "G-1ECN5PEH9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promp: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);