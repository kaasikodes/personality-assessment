import React from "react";
import { extrovertText, introvertText } from "./data";

interface IProps {
  introVal: number;
  extroVal: number;
}

const ResultSummary = ({ introVal, extroVal }: IProps) => {
  // The concept behind determining wether person is introverted or extroverted is as follows:
  // Each option in a question is indicative of how introverted or extroverted an individual is
  // i.e introVal, & extroVal (these values are created in such a way that there sum is always 5)
  // the sum of the values is always 5 to ensure that at the end of the assesment, the individual
  // is either introverted or extroverted as 5 cannot be shared evenly
  // provided the sum of these 2 values are 5, the individual will always be one or the other but never both
  // As a result of this constraint one value will always be greater than the other
  return (
    <>
      <h4 className="text-2xl text-center">
        {" "}
        {introVal > extroVal ? `You're an introvert` : `You're an extrovert`}
      </h4>
      <div className="text-center">
        {introVal > extroVal ? introvertText : extrovertText}
      </div>
    </>
  );
};

// Does it display appropriate value dependent on the val fed in

export default ResultSummary;
