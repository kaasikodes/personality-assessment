import { questions } from "mocks/data";
import { screen, render } from "test-utils";
import QuestionList from "./QuestionList";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Question List", () => {
  test("Renders a list of all the questions passed", () => {
    render(<QuestionList data={questions} />);
    const comps = screen.getAllByRole("listitem");
    expect(comps.length).toBe(questions.length);
  });
});
