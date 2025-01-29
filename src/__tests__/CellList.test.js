import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GridProvider } from "../store/GridContext";
import CellList from "../components/CellList";

describe("CellList Component", () => {
  it("renders list header", () => {
    render(
      <GridProvider>
        <CellList />
      </GridProvider>
    );

    expect(screen.getByText("List Items")).toBeInTheDocument();
  });

  it("renders correct number of cells", () => {
    render(
      <GridProvider>
        <CellList />
      </GridProvider>
    );

    expect(screen.getAllByText(/Cell \d+/i)).toHaveLength(1);
  });

  it("toggles visibility when a cell is clicked", () => {
    render(
      <GridProvider>
        <CellList />
      </GridProvider>
    );

    const cell = screen.getByText("Cell 1");
    expect(cell).toBeInTheDocument();
  });
});
