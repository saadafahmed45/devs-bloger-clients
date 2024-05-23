"use client";
import React, { createContext, useState } from "react";

const Context = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};

export default Context;
