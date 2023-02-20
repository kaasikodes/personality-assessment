import React, { useState } from "react";

import useFetchQuestions from "hooks/useFetchQuestions/useFetchQuestions";
import { TPagination } from "types";

import Loader from "../loader/Loader";
import QuestionList from "./QuestionList";
import ErrorComp from "components/error";

const QuestionsContainer = () => {
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
    limit: 1,
  });

  //   to initialize data on first load
  const { data, reqState } = useFetchQuestions({ pagination });

  const handleNext = () => {
    if (pagination.page === data?.total) return;
    setPagination((val) => ({ ...val, page: val.page + 1 }));
  };
  const handlePrev = () => {
    if (pagination.page === 1) return;
    setPagination((val) => ({ ...val, page: val.page - 1 }));
  };
  if (reqState === "loading") {
    return <Loader />;
  }
  if (reqState === "error") {
    return (
      <ErrorComp message="Error Loading Question, please turn on dev server (yarn dev-backend)" />
    );
  }
  //   will be reached if the req state is a success
  if (reqState === "success" && data) {
    return (
      <div className="flex flex-col gap-6">
        <h6 className="text-sm">
          Question {pagination.page}/{data.total}
        </h6>
        <QuestionList
          data={data.questions}
          control={{
            handleNext,
            handlePrev,
            total: data.total,
            pagination,
          }}
        />
        {/* pagination */}
      </div>
    );
  }
  return null;
};

// Does it  display proper comp on err, loading(test id), n success
// Does it display the proper h6 content

export default QuestionsContainer;
