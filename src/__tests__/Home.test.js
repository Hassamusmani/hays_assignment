import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GridProvider } from "../store/GridContext";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("renders the Home component correctly", () => {
    render(
      <GridProvider>
        <Home />
      </GridProvider>
    );

    expect(screen.getByText("List Items")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
