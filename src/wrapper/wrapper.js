"use client";
import { useEffect } from "react";

export const Wrapper = ({ children }) => {
  useEffect(() => {
    console.log("Wrapper mounted");
  }, []);

  return (
    <div>
      <h1>===wrapped===</h1>
      <main>{children}</main>
    </div>
  );
};
