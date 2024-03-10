import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "./UserCard";
import "@testing-library/jest-dom";

const mockUser = {
  email: "testuser@example.com",
  notes: [{ note: "Test Note 1", date: "01/01/2024" }],
};

test("toggles notes display on icon click", () => {
  render(<UserCard user={mockUser} />);

  expect(
    screen.queryByText("Test Note 1 | 01/01/2024")
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByAltText("dropdown"));

  expect(screen.getByText("Test Note 1 | 01/01/2024")).toBeInTheDocument();

  fireEvent.click(screen.getByAltText("dropdown"));

  expect(
    screen.queryByText("Test Note 1 | 01/01/2024")
  ).not.toBeInTheDocument();
});

test("renders with user but no notes", () => {
  const userWithNoNotes = { email: "user@example.com", notes: [] };
  render(<UserCard user={userWithNoNotes} />);
  fireEvent.click(screen.getByAltText("dropdown"));
  expect(
    screen.getByText("No logs recorded under this account")
  ).toBeInTheDocument();
});

test("displays the user's email", () => {
  render(<UserCard user={mockUser} />);
  expect(screen.getByText(mockUser.email)).toBeInTheDocument();
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders notes with unique key props", () => {
  render(<UserCard user={mockUser} />);
  fireEvent.click(screen.getByAltText("dropdown"));
  expect(console.error).not.toHaveBeenCalledWith(
    expect.stringContaining(
      'Each child in a list should have a unique "key" prop.'
    )
  );
});
