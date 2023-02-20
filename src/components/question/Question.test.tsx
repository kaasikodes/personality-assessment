import { questions } from "mocks/data";
import { screen, render, fireEvent } from "test-utils";
import { TControl } from "types";
import Question from "./Question";
import user from "@testing-library/user-event";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Question", () => {
  test("Render a form", () => {
    render(<Question item={questions[0]} />);
    const comp = screen.getByRole("form");
    expect(comp).toBeInTheDocument();
  });
  test("Render buttons when controls props is passed in", () => {
    const item = questions[0];
    const control: TControl = {
      handleNext: jest.fn(),
      handlePrev: jest.fn(),
      pagination: {
        page: 1,
        limit: 1,
      },
      total: 3,
    };
    render(<Question item={item} control={control} />);
    const comp = screen.queryAllByRole("button");
    expect(comp).toHaveLength(2);
  });
  test("Render button with finish text when the last question is reached", () => {
    const item = questions[0];
    const control: TControl = {
      handleNext: jest.fn(),
      handlePrev: jest.fn(),
      pagination: {
        page: 3,
        limit: 1,
      },
      total: 3,
    };
    render(<Question item={item} control={control} />);
    const comp = screen.getByText("Finish");
    expect(comp).toBeInTheDocument();
  });
  test("Render button with next text when there is a next", () => {
    const item = questions[0];
    const control: TControl = {
      handleNext: jest.fn(),
      handlePrev: jest.fn(),
      pagination: {
        page: 2,
        limit: 1,
      },
      total: 3,
    };
    render(<Question item={item} control={control} />);
    const comp = screen.getByText("Next");
    expect(comp).toBeInTheDocument();
  });
  test("Render question number, when index is passed in", () => {
    const item = questions[0];
    const index = 1;

    render(<Question item={item} index={index} />);
    const comp = screen.getByText(`${index}.)`);
    expect(comp).toBeInTheDocument();
  });
  test("Render question number, when control is passed in, from control prop", () => {
    const item = questions[0];
    const index = 1;
    const control: TControl = {
      handleNext: jest.fn(),
      handlePrev: jest.fn(),
      pagination: {
        page: 2,
        limit: 1,
      },
      total: 3,
    };

    render(<Question item={item} index={index} control={control} />);
    const comp = screen.getByText(`${control.pagination.page}.)`);
    expect(comp).toBeInTheDocument();
  });
  test("Render the prev question, when the prev btn is clicked", async () => {
    const item = questions[0];
    const index = 1;
    const handleNext = jest.fn();
    const handlePrev = jest.fn();
    const control: TControl = {
      handleNext,
      handlePrev,
      pagination: {
        page: 2,
        limit: 1,
      },
      total: 3,
    };

    render(<Question item={item} index={index} control={control} />);
    const comp = screen.getByText("Previous");
    comp.click();
    expect(handlePrev).toBeCalled();
  });
});
