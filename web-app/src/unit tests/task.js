import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  faCheck,
  faHourglassStart,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TaskItem from "./../components/task";

describe("TaskItem", () => {
  const mockTask = {
    _id: "1",
    task: "Task 1",
    completed: false,
  };
  const mockHandleDelete = jest.fn();

  test("renders task item correctly", () => {
    const { getByText, getByTestId } = render(
      <TaskItem task={mockTask} handleDelete={mockHandleDelete} />
    );

    const taskTextElement = getByText("Task 1");
    expect(taskTextElement).toBeInTheDocument();

    const taskIconElement = getByTestId("task-icon");
    expect(taskIconElement).toHaveClass("fa-hourglass-start");

    const deleteIconElement = getByTestId("delete-icon");
    expect(deleteIconElement).toBeInTheDocument();
  });

  test("handles delete icon click correctly", () => {
    const { getByTestId } = render(
      <TaskItem task={mockTask} handleDelete={mockHandleDelete} />
    );

    const deleteIconElement = getByTestId("delete-icon");
    fireEvent.click(deleteIconElement);

    expect(mockHandleDelete).toHaveBeenCalledWith("1");
  });

  test("renders completed task correctly", () => {
    const completedTask = { ...mockTask, completed: true };
    const { getByTestId } = render(
      <TaskItem task={completedTask} handleDelete={mockHandleDelete} />
    );

    const taskIconElement = getByTestId("task-icon");
    expect(taskIconElement).toHaveClass("fa-check");
  });
});
