import { loaderTestId } from "components/loader";
import { screen, render } from "test-utils";
import QuestionsContainer from "./QuestionsContainer";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Question Container", () => {
  test("Render loader when first mounted", () => {
    render(<QuestionsContainer />);
    const comp = screen.getByTestId(loaderTestId);
    expect(comp).toBeInTheDocument();
  });
});
