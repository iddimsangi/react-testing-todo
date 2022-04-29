import { screen, render } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();
describe("AddInput tests", () => {
  test("Should renders input placeholder text", () => {
    render(<AddInput todos={mockedSetTodos} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEl).toBeInTheDocument();
  });
});
