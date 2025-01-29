import React from "react";

import styles from "./Home.module.css";
import CellList from "../components/CellList";
import RasterGrid from "../components/RasterGrid";

const Home = () => {
  return (
    <main className={styles.container}>
      <CellList />
      <RasterGrid />
    </main>
  );
};

export default Home;
