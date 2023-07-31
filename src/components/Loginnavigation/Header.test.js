import { render, screen } from "@testing-library/react";
import Header from "./Header";
test("renders Home as  a text", () => {
  //Arrange
  render(<Header />);
  //Act
  //Assert
  const HomeElement = screen.getByText("Home");
  expect(HomeElement).toBeInTheDocument();
});
