import React from "react";
import { render, screen } from "@testing-library/react";
import Items from "./Items";

describe("Items", () => {
  test("renders all items", () => {
    render(<Items />);
    const itemElements = screen.getAllByRole("listitem");
    expect(itemElements.length).toEqual(8);
  });

  test("adds item to cart when Add to Cart button is clicked", () => {
    const addItemMock = jest.fn();
    jest.mock("../../context/CartContext", () => ({
      CartContext: {
        addItem: addItemMock,
      },
    }));

    render(<Items />);
    const addToCartButtons = screen.getAllByText("Add to Cart");
    expect(addToCartButtons.length).toEqual(8);

    const firstAddToCartButton = addToCartButtons[0];
    firstAddToCartButton.click();
    expect(addItemMock).toHaveBeenCalledTimes(1);
    expect(addItemMock).toHaveBeenCalledWith({
      id: 1,
      category: "Digital Art",
      banner: "./src/assets/images/products/showcase-7.jpg",
      avatar: "./src/assets/images//avatar/avatar-7.jpg",
      artist: "Yousef",
      title: "Dark Moon Token ",
      price: 0.5,
    });
  });
});
