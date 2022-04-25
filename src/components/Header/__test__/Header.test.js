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

test("should not renders  header text list toddo", () => {
  render(<Header title="Test header message" />);
  const headerTxt = screen.queryByText("list of toddo");
  expect(headerTxt).not.toBeInTheDocument();
});

test("should renders all headings", () => {
  render(<Header title="Test header message" />);
  const headers = screen.getAllByRole("heading");
  expect(headers.length).toBe(2);
});
