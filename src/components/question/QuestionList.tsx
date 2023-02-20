import React from "react";
import { TControl, TQuestion } from "types";
import Question from "./Question";
interface IProps {
  data: TQuestion[];

  control?: TControl;
}

const QuestionList = ({ data, control }: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <Question
          key={item.id}
          item={item}
          control={control}
          index={index + 1}
        />
      ))}
    </div>
  );
};

// does it display a list of all questions passed into it

export default QuestionList;
