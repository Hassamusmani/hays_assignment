import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GridProvider } from "../store/GridContext";
import RasterGrid from "../components/RasterGrid";

describe("RasterGrid Component", () => {
  it("renders the image correctly", () => {
    render(
      <GridProvider>
        <RasterGrid />
      </GridProvider>
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "background");
  });

  it("renders correct number of grid cells", () => {
    render(
      <GridProvider>
        <RasterGrid />
      </GridProvider>
    );

    expect(screen.getAllByText(/Cell \d+/i)).toHaveLength(1);
  });
});
