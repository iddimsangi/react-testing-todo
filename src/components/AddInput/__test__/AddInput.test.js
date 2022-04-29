import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();
describe("AddInput tests", () => {
  test("Should renders input placeholder text", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEl).toBeInTheDocument();
  });

  test("Should type input value ", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Go playing footbal" } });
    expect(inputEl.value).toBe("Go playing footbal");
  });

  test("Should empty input value when add button is clicked ", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputEl, { target: { value: "Go playing footbal" } });
    fireEvent.click(buttonElement);
    expect(inputEl.value).toBe("");
  });
});
