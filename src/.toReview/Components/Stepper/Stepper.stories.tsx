import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Stepper } from ".";
import { StepperProps } from "./Stepper";
import { Button } from "../Button";

const steps = [
  { title: "first step", content: "first step content" },
  { title: "second step", content: "second step content" },
  { title: "third step", content: "third step content" },
];
// 👇 We create a “template” of how args map to rendering
const Template: Story<StepperProps> = (args) => {
  const [count, setCount] = useState<number>(1);
  const handleOnClick = () => {
    if (count === steps.length) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <Button onClick={handleOnClick}>change step</Button>
      <Stepper {...args} steps={steps} activeStep={count} />
    </div>
  );
};

// Stories
export const Basic = Template.bind({});
Basic.storyName = "Basic Usage";
export const Steps = Template.bind({});
Steps.args = { steps: undefined }; // TODO: add correct type for Step[]
export const Orientation = Template.bind({});
Orientation.args = { orientation: "horizontal" };

export default {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    componentSubtitle: "It is a navigation bar that guides users through the steps of a task.",
    design: {
      type: "figma",
      url: "",
    },
  },
  argTypes: {
    steps: {
      description:
        "An array of steps to show, each step could have a title and must have a content.",
    },
    orientation: {
      description: "It's the stepper orientation",
      defaultValue: "vertical",
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
  },
} as Meta<typeof Stepper>;
