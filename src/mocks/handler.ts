import { API_URL } from "data/constants";
import { rest } from "msw";
import { TQuestion } from "types";
import { questions } from "./data";

export const handlers = [
  rest.get(`${API_URL}/questions`, (req, res, ctx) => {
    const page = req.url.searchParams.get("_page"); //pagination param
    const limit = req.url.searchParams.get("_limit"); //pagination param
    if (page && limit) {
      return res(
        ctx.set("X-Total-Count", `${questions.length}`),
        ctx.status(200),
        ctx.json(questions.slice((+page - 1) * +limit, +page * +limit))
      );
    }
    return res(ctx.status(200), ctx.json(questions));
  }),
  rest.patch(`${API_URL}/questions/:id`, async (req, res, ctx) => {
    const id = req.params.id;
    const answer = await req.json();
    const question = questions.find(
      (item) => item.id === +id
    ) as unknown as TQuestion;
    let updatedQuestion = { ...question, choosenOption: answer };

    return res(ctx.status(200), ctx.json(updatedQuestion));
  }),
];
