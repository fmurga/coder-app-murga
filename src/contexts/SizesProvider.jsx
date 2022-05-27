import React, { createContext, useState } from "react";

export const SizesContext = createContext([]);

const SizesProvider = ({ children }) => {
  const [sharedSize, setShareddSize] = useState({});

  const getSharedSize = () => {
    return sharedSize;
  };

  const setSharedSelectedSize = (size) => {
    setShareddSize(size);
  };

  return (
    <SizesContext.Provider
      value={{
        setShareddSize,
        sharedSize,
        getSharedSize,
        setSharedSelectedSize
      }}>
      {children}
    </SizesContext.Provider>
  );
};

export default SizesProvider;
