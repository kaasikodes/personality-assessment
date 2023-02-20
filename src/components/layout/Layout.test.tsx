import { screen, render } from "test-utils";
import Layout from "./Layout";

describe("Layout", () => {
  test("Ensure teamway assessment text is in the document", () => {
    render(<Layout />);
    const comp = screen.getByText("Team way Assessment");
    expect(comp).toBeInTheDocument();
  });
});
