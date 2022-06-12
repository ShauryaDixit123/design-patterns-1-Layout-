import React from "react";
import { useState } from "react";

export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show modal</button>
      {isOpen && (
        <div className="bg-gray-500 fixed " onClick={() => setIsOpen(false)}>
          <div className="bg-gray-200" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)}>X</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
