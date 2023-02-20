import { appRoutes } from "data/routes";
import { screen, render } from "test-utils";
import Home from "./Home";

describe("Home", () => {
  test("Render the proper heading", () => {
    render(<Home />);
    const comp = screen.getByText("Are you are an introvert or extrovert?");
    expect(comp).toBeVisible();
  });
  test("Ensure that image is visible", () => {
    render(<Home />);
    const comp = screen.getByRole("img");
    expect(comp).toBeVisible();
  });
  test("Ensure that image has its src and alt attribute set", () => {
    render(<Home />);
    const comp = screen.getByRole("img");
    expect(comp).toHaveAttribute("src");
    expect(comp).toHaveAttribute("alt");
  });
  test("Render the proper paragraph", () => {
    render(<Home />);

    const comp = screen.getByText(
      "Find out what is personality by taking a series of tests that have been curated by the best doctors worldwide"
    );
    expect(comp).toBeVisible();
  });
  test("Render a link with appropriate href", () => {
    render(<Home />);
    const comp = screen.getByRole("link");
    expect(comp).toHaveAttribute("href", appRoutes.start);
    expect(comp).toBeEnabled();
    expect(comp).toBeVisible();
  });
  test("Rendered link should be visible", () => {
    render(<Home />);
    const comp = screen.getByRole("link");

    expect(comp).toBeVisible();
  });
  test("Rendered link should be enabled", () => {
    render(<Home />);
    const comp = screen.getByRole("link");
    expect(comp).toBeEnabled();
  });
});
