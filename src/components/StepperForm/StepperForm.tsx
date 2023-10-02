"use client";

import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { message, Steps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}

const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
          {current > 0 && (
              <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right" onClick={() => prev()}>
                Previous
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                className="bg-indigo-700 px-4 py-2 mr-2 text-white rounded font-semibold float-right"
                type="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </button>
            )}
            {current < steps.length - 1 && (
              <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right mr-2" onClick={() => next()}>
                Next
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;