import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Home from "./pages/Home";

function App() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [visibility, setVisibility] = useState([]);

  const toggleVisibility = (index) => {
    const newVisibility = [...visibility];
    newVisibility[index] = !newVisibility[index];
    setVisibility(newVisibility);
  };

  useEffect(() => {
    const newSize = rows * cols;
    const currentSize = visibility.length;

    if (newSize > currentSize) {
      // Add new cells with visibility set to true
      setVisibility((prevVisibility) => [
        ...prevVisibility,
        ...Array(newSize - currentSize).fill(true),
      ]);
    } else if (newSize < currentSize) {
      // Remove extra cells, keeping the first `newSize` cells
      setVisibility((prevVisibility) => prevVisibility.slice(0, newSize));
    }
  }, [rows, cols]);

  return (
    <div className="App">
      <Header
        rows={rows}
        cols={cols}
        rowHandler={setRows}
        colHandler={setCols}
      />
      <Home
        rows={rows}
        cols={cols}
        visibility={visibility}
        toggleVisibility={toggleVisibility}
      />
    </div>
  );
}

export default App;
