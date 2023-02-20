import { renderHook, waitFor } from "@testing-library/react";
import { questions } from "mocks/data";

import useFetchQuestions from "./useFetchQuestions";

describe("useFetchQuestions", () => {
  test("should return null as data and req state of loading, initially", () => {
    const { result } = renderHook(useFetchQuestions);
    expect(result.current.data).toBe(null);
    expect(result.current.reqState).toBe("loading");
  });
  test("should return all data without pagination, when pagination prop is not passed", async () => {
    const { result } = renderHook(useFetchQuestions);
    await waitFor(() => {
      expect(result.current.reqState).toBe("success"); // the state of request
    });
    await waitFor(() => {
      expect(result.current.data?.questions.length).toBe(questions.length); // the no questions returned should equal the total no. of questions
    });
  });
  test("should return paginated data, when pagination prop is passed", async () => {
    const limit = 1; //should be above 1
    const page = 1;
    const { result } = renderHook(useFetchQuestions, {
      initialProps: {
        pagination: {
          page,
          limit,
        },
      },
    });

    await waitFor(() => {
      expect(result.current.data?.questions.length).toBe(limit);
    });
  });
  test("should return the correct total count of data, when paginated", async () => {
    const { result } = renderHook(useFetchQuestions, {
      initialProps: {
        pagination: {
          page: 1,
          limit: 1,
        },
      },
    });

    await waitFor(() => {
      expect(result.current.data?.total).toBe(questions.length);
    });
  });
  test("should return the correct total count of data, when not paginated", async () => {
    const { result } = renderHook(useFetchQuestions);

    await waitFor(() => {
      expect(result.current.data?.total).toBe(questions.length);
    });
  });
});
