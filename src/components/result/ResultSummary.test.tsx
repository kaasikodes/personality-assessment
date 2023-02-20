import { screen, render } from "test-utils";
import { extrovertText, introvertText } from "./data";
import ResultSummary from "./ResultSummary";

describe("Result Summary", () => {
  test("Render the introvert text when introvertValue is greater than extrovert value", () => {
    render(<ResultSummary introVal={40} extroVal={30} />);
    const comp = screen.getByText(
      (content) => content.startsWith(introvertText.substring(0, 20)) // there is no line break at 20th character
    );
    expect(comp).toBeInTheDocument();
  });
  test("Render the exrovert text when extrovertValue is greater than introvert value", () => {
    render(<ResultSummary introVal={40} extroVal={130} />);
    const comp = screen.getByText(
      (content) => content.startsWith(extrovertText.substring(0, 20)) // there is no line break at 20th character
    );
    expect(comp).toBeInTheDocument();
  });
});
