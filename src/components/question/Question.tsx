import { Button, Form, Radio } from "antd";
import { appRoutes } from "data/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAnswer } from "services/api";

import { TControl, TQuestion } from "types";

interface IProps {
  item: TQuestion;
  index?: number;
  control?: TControl;
}

const Question = ({ item, control, index }: IProps) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: any) => {
    setLoading(true);
    const choosenOption = item.options.find(
      (item) => item.id === data.choosenOption
    );
    if (choosenOption) {
      saveAnswer({
        questionId: item.id,

        answer: {
          questionId: item.id,
          optionId: data.choosenOption,
          answer: {
            extrovertValue: choosenOption?.extrovertValue,
            introvertValue: choosenOption?.introvertValue,
          },
        },
      })
        .then((res) => {
          setLoading(false);
          if (control?.pagination.page === control?.total) {
            navigate(appRoutes.result, { replace: true });
          } else {
            control && control.handleNext();
          }
        })
        .catch(() => setLoading(false));
    }
  };
  const handleSaveAnswer = () => {
    form.submit();
  };
  return (
    <div role="listitem">
      <Form
        disabled={!control}
        layout="vertical"
        size="large"
        form={form}
        onFinish={handleSubmit}
        requiredMark={false}
        initialValues={{
          choosenOption: item.choosenOption?.optionId,
        }}
        role="form"
      >
        <Form.Item
          label={
            <span>
              <span>{control?.pagination.page ?? index}.)</span>
              {item.content}
            </span>
          }
          name="choosenOption"
          rules={[
            {
              required: true,
              message: "Please answer question before proceeding",
            },
          ]}
        >
          <Radio.Group>
            <div className="flex flex-col gap-3">
              {item.options.map((opt) => (
                <Radio value={opt.id} key={opt.id}>
                  {opt.content}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </Form.Item>
      </Form>
      {control && (
        <div className="flex justify-between">
          <Button onClick={control.handlePrev} name="previous">
            Previous
          </Button>

          <Button onClick={handleSaveAnswer} loading={loading} name="submit">
            {control.pagination.page === control?.total ? "Finish" : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};
// Does comp render conditionally according to props: is form disabled, text of btn, e.tc
// Does comp form display all the options from question
// are the options selectable
// does form submission trigger api call , and on success does it move to next
// does form display proper no. for question
// the onClick btn of previous n next

export default Question;
