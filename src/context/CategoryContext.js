import React, { createContext, useState } from "react";

const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [addedCategory, setAddedCategory] = useState(0);

  const values = {
    addedCategory,
    setAddedCategory,
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
