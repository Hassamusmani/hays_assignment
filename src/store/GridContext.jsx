import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const GridContext = createContext();

// Custom Hook to use Grid Context
export const useGrid = () => useContext(GridContext);

// Context Provider Component
export const GridProvider = ({ children }) => {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [visibility, setVisibility] = useState([]);

  // Toggle visibility of a specific cell
  const toggleVisibility = (index) => {
    setVisibility((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  // Update visibility array whenever rows or cols change
  useEffect(() => {
    const newSize = rows * cols;
    const currentSize = visibility.length;

    setVisibility((prevVisibility) =>
      newSize > currentSize
        ? [...prevVisibility, ...Array(newSize - currentSize).fill(true)]
        : prevVisibility.slice(0, newSize)
    );
  }, [rows, cols]);

  return (
    <GridContext.Provider
      value={{ rows, cols, setRows, setCols, visibility, toggleVisibility }}
    >
      {children}
    </GridContext.Provider>
  );
};
