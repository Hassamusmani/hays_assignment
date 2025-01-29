import React from "react";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { GridProvider } from "./store/GridContext";

function App() {
  return (
    <GridProvider>
      <Header />
      <Home />
    </GridProvider>
  );
}

export default App;
