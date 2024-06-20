import React from "react";
import classNames from "classnames";
import { DefaultProps, Orientation } from "../../utils/types";

// styles
import "./stepper.scss";

type Step = {
  title?: string;
  content: string;
};

// Required Props
interface StepperRequiredProps {
  // An array of steps to show, each step could have a title and must have a content.
  steps: Step[];
  // The active step
  activeStep: number;
}

// Optional Props
interface StepperOptionalProps extends DefaultProps {
  // It's the stepper orientation
  orientation?: Orientation;
}

// Combined required and optional props to build the full prop interface
export interface StepperProps extends StepperRequiredProps, StepperOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: StepperOptionalProps = {
  "data-testid": "tecma-stepper",
  orientation: "horizontal",
};

const Stepper: React.FC<StepperProps> = ({
  className,
  orientation,
  steps,
  activeStep,
  ...rest
}) => {
  const classList = classNames("tecma-stepper", orientation, className);
  return (
    <div className={classList} {...rest}>
      {steps.map((step, index) => (
        <div key={step.title} className="step">
          <div className="step-index-container">
            <div className={index + 1 === activeStep ? "step-index active-step" : "step-index"}>
              <span>{index}</span>
            </div>
            <div
              className={
                index + 1 === activeStep ? "step-index-line active-step" : "step-index-line"
              }
            />
          </div>
          <div className="step-content">
            <p className="title">{step.title}</p>
            <p className="content">{step.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Stepper.defaultProps = defaultProps as Partial<StepperOptionalProps>;

export default React.memo(Stepper);
