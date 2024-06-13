"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // google logged in
  const [user, setUser] = useState("");
  // auth
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        // localStorage save the user
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // sign out
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
        localStorage.setItem("user", JSON.stringify(""));
        location.reload();
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  // localStorage save
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || []);
  }, []);


// manage bookmark 
const [bookMarks,setBookmarks]=useState([])
const handleBookMark = (blog)=>{

  setBookmarks((prevBookmarks) => {
    if (prevBookmarks.some((item) => item._id === blog._id)) {
      // If blog is already bookmarked, remove it
      return prevBookmarks.filter((item) => item._id !== blog._id);
    } else {
      // Add new bookmark
      return [...prevBookmarks, blog];
    }
    
  });

}

console.log(bookMarks);
console.log(bookMarks.length);


  return (
    <Context.Provider value={{ googleSingIn, handleSingOut, user,handleBookMark ,bookMarks}}>
      {children}
    </Context.Provider>
  );
};
