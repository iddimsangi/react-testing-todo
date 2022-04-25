import { screen, render } from "@testing-library/react";
import Header from "../Header";

test("should renders header text passed as a prop", () => {
  render(<Header title="Test header message" />);
  const headerTxt = screen.getByText(/test header message/i);
  expect(headerTxt).toBeInTheDocument();
});

test("should renders header text", () => {
  render(<Header title="Test header message" />);
  const headerTxt = screen.getByRole("heading", {
    name: "Another text",
  });
  expect(headerTxt).toBeInTheDocument();
});
