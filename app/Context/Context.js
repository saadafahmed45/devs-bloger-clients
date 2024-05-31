"use client";
import React, { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // google logged in
  const [user, setUser] = useState("");
  const googleSingIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };
  return (
    <Context.Provider value={{ googleSingIn, user }}>
      {children}
    </Context.Provider>
  );
};
