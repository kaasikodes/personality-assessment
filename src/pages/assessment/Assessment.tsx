import QuestionsContainer from "components/question";

export const headerText = "Are you are an introvert or extrovert?";

const Assessment = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-2xl text-center">{headerText}</h4>
      <QuestionsContainer />
    </div>
    // Display the questions
  );
};
// Does the comp display text
// Does the Assessment render a single question via the question container

export default Assessment;
