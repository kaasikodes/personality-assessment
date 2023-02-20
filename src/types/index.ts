export type TControl = {
  handleNext: () => void;
  handlePrev: () => void;
  pagination: TPagination;
  total: number;
};
export type TOption = {
  id: number;
  content: string;
  extrovertValue: number; // max value of 5 && min value of 0
  introvertValue: number; // the sum of the intovert and extrovert value on an option should always sum up to 5 i.e to ensure that the final value will always be either introvert or extrovert and not lie somewhere in the middle, 5 is also choosen as it is an odd number can not be shared equally inter wise
};
export type TQuestion = {
  id: number;

  content: string;
  options: TOption[];
  choosenOption?: TAnswer;
};
export type TAnswer = {
  questionId: number;
  optionId: number;
  answer: {
    extrovertValue: number;
    introvertValue: number;
  };
};

export type TPagination = {
  page: number;
  limit: number;
};

export type TRequestState = "loading" | "error" | "success";
