import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
const auth = getAuth();

const provider = new GoogleAuthProvider();


provider.setCustomParameters({
  promp: 'select_account'
});

export const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, provider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocReference = await doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocReference, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocReference;
};

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
  if (!email || !password || !displayName) return;
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    return await createUserDocumentFromAuth(user, displayName);
  } catch (error) {
    console.log("error: creating user from password and email.", error);
  }
}

export const signInUserFromEmailPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.log("error: signing in user.", error.message, error.code);
  }
}

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}