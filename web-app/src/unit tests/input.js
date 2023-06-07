import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import InputField from "./../components/input";

describe("InputField", () => {
  const mockInput = "Task 1";
  const mockHandleInputChange = jest.fn();
  const mockHandleKeyPress = jest.fn();
  const mockAddItem = jest.fn();

  test("renders input field correctly", () => {
    render(
      <InputField
        input={mockInput}
        handleInputChange={mockHandleInputChange}
        handleKeyPress={mockHandleKeyPress}
        addItem={mockAddItem}
      />
    );

    const inputElement = screen.getByDisplayValue("Task 1");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Task 2" } });
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
    expect(mockHandleInputChange).toHaveBeenCalledWith("Task 2");

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(mockHandleKeyPress).toHaveBeenCalledTimes(1);

    const plusIconElement = screen.getByTestId("plus-icon");
    fireEvent.click(plusIconElement);
    expect(mockAddItem).toHaveBeenCalledTimes(1);
  });

  test("renders font awesome icons correctly", () => {
    render(
      <InputField
        input={mockInput}
        handleInputChange={mockHandleInputChange}
        handleKeyPress={mockHandleKeyPress}
        addItem={mockAddItem}
      />
    );

    const barsIconElement = screen.getByTestId("bars-icon");
    const plusIconElement = screen.getByTestId("plus-icon");

    expect(barsIconElement).toBeInTheDocument();
    expect(plusIconElement).toBeInTheDocument();
  });
});
