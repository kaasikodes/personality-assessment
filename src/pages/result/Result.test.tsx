import { loaderTestId } from "components/loader";
import { screen, render } from "test-utils";
import Result from "./Result";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Result", () => {
  test("Render loader when first mounted", () => {
    render(<Result />);
    const comp = screen.getByTestId(loaderTestId);
    expect(comp).toBeInTheDocument();
  });
});
