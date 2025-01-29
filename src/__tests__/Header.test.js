import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GridProvider } from "../store/GridContext";
import Header from "../components/layout/Header";

describe("Header Component", () => {
  it("renders the header title", () => {
    render(
      <GridProvider>
        <Header />
      </GridProvider>
    );

    expect(screen.getByText("The Raster Grid")).toBeInTheDocument();
  });

  it("renders input fields with default values", () => {
    render(
      <GridProvider>
        <Header />
      </GridProvider>
    );

    expect(screen.getByLabelText(/Rows/i)).toHaveValue(1);
    expect(screen.getByLabelText(/Cols/i)).toHaveValue(1);
  });

  it("updates rows and columns on input change", () => {
    render(
      <GridProvider>
        <Header />
      </GridProvider>
    );

    const rowsInput = screen.getByLabelText(/Rows/i);
    const colsInput = screen.getByLabelText(/Cols/i);

    fireEvent.change(rowsInput, { target: { value: 3 } });
    fireEvent.change(colsInput, { target: { value: 4 } });

    expect(rowsInput).toHaveValue(3);
    expect(colsInput).toHaveValue(4);
  });
});
