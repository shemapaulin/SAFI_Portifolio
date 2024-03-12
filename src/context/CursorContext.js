import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPros, setCursorPros] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setCursorPros({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  });

  const cursorVariants = {
    default: {
      x: cursorPros.x - 16,
      y: cursorPros.y - 16,
      backgroundColor: '#0e1112'
    },
  };
  return (
    <CursorContext.Provider value={{cursorVariants}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
