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

  // Initially, notes should not be visible
  expect(
    screen.queryByText("Test Note 1 | 01/01/2024")
  ).not.toBeInTheDocument();

  // Click the caret icon to show notes
  fireEvent.click(screen.getByAltText("dropdown"));

  // Notes should now be visible
  expect(screen.getByText("Test Note 1 | 01/01/2024")).toBeInTheDocument();

  // Click again to hide notes
  fireEvent.click(screen.getByAltText("dropdown"));

  // Notes should not be visible again
  expect(
    screen.queryByText("Test Note 1 | 01/01/2024")
  ).not.toBeInTheDocument();
});
