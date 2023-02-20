import { screen, render } from "test-utils";
import Assessment, { headerText } from "./Assessment";

describe("Assessment", () => {
  test("Ensure that the appropriate text is displayed", () => {
    render(<Assessment />);
    const comp = screen.getByText(headerText);
    expect(comp).toBeInTheDocument();
  });
});
