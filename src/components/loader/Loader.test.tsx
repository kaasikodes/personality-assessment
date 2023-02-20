import { screen, render } from "test-utils";
import Loader, { loaderTestId } from "./Loader";

describe("Loader", () => {
  test("Ensure that the component renders", () => {
    render(<Loader />);
    const comp = screen.getByTestId(loaderTestId);
    expect(comp).toBeInTheDocument();
  });
  test("Ensure that the component appends to classname when height prop is passed", () => {
    const height = "h-72";
    render(<Loader height={height} />);
    const comp = screen.getByTestId(loaderTestId);
    expect(comp).toHaveClass(height);
  });
});
