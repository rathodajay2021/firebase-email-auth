import React, { useContext, useEffect, useState } from "react";
import { auth } from "FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(
        "🚀 ~ file: AuthContext.jsx:28 ~ signUpUser ~ error:",
        error?.code,
        error?.message,
        error
      );
    }
  };

  const SignInUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(
        "🚀 ~ file: AuthContext.jsx:43 ~ SignInUser ~ error:",
        error,
        error?.code,
        error?.message
      );
    }
  };

  const AuthProviderValue = {
    currentUser,
    signUpUser,
    SignInUser,
  };

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unSubscriber();
  }, []);

  return (
    <AuthContext.Provider value={AuthProviderValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
