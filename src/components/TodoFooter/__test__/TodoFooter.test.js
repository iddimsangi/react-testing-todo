import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockedTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("Should renders number of incomplete tasks", () => {
  render(<MockedTodoFooter numberOfIncompleteTasks={7} />);
  const paragraphElement = screen.getByText(/7 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
  expect(screen.getByText(/Followers/i)).toBeInTheDocument();
});
