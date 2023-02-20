import { Button, Divider } from "antd";
import PersonalityResult from "components/result/ResultSummary";
import QuestionList from "components/question/QuestionList";

import { appRoutes } from "data/routes";

import useFetchQuestions from "hooks/useFetchQuestions/useFetchQuestions";
import ErrorComp from "components/error";
import Loader from "components/loader";
// test 4 error , loading , n success status
const Result = () => {
  const { data, reqState } = useFetchQuestions();
  const questionCount = data?.total;
  const totalIntrovertScore = data?.questions.reduce(
    (a, b) =>
      a + (b.choosenOption ? b.choosenOption?.answer?.introvertValue : 0),
    0
  );
  const totalExtrovertScore = data?.questions.reduce(
    (a, b) =>
      a + (b.choosenOption ? b.choosenOption?.answer?.extrovertValue : 0),
    0
  );
  console.log(
    data,
    "ALL",
    questionCount,
    "...",
    totalExtrovertScore,
    totalIntrovertScore
  );
  if (reqState === "loading") {
    return <Loader />;
  }
  if (reqState === "error") {
    return <ErrorComp message="Error Loading Question" />;
  }
  if (reqState === "success" && data)
    return (
      <div className="flex flex-col gap-4">
        <PersonalityResult
          extroVal={totalExtrovertScore ?? 0}
          introVal={totalIntrovertScore ?? 0}
        />
        <Divider />

        {/* The Questions and their ansers */}
        <QuestionList data={data?.questions ?? []} />
        <Divider />

        <div className="flex justify-center">
          <Button href={appRoutes.index}>Restart</Button>
        </div>
      </div>
    );
  return null;
};

// does it display a list of questions as disabled forms
// Does it provide a link to go back home
// Does it render the Personality result with appropriate text

export default Result;
