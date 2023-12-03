import { screen, render } from "@testing-library/react";
import App from "./App";

It("Should  render the same value passed into as props", () => {
  render(<App />);
  const headerElement = screen.getByText(/Post Title/i);
  expect(headerElement).toBeInTheDocument();
});
