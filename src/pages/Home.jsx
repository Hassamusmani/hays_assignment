import React from "react";
import CellList from "../components/CellList";
import RasterGrid from "../components/RasterGrid";

const Home = ({ rows, cols, visibility, toggleVisibility, handleHover }) => {
  return (
    <section className="container">
      <CellList
        rows={rows}
        cols={cols}
        visibility={visibility}
        toggleVisibility={toggleVisibility}
      />
      <RasterGrid rows={rows} cols={cols} visibility={visibility} />
    </section>
  );
};

export default Home;
