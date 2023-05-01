import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders the title and description correctly", () => {
    render(<Banner />);
    const titleElement = screen.getByText(/Discover World of Digital/i);
    expect(titleElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(
      /Welcome to our demo store/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
