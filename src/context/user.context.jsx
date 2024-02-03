import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils.js";


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}