import React from "react";
import Stepper from "./Stepper";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "tecma-stepper",
};

describe("Stepper Component", () => {
  performStandardTest(Stepper, defaultProps, "tecma-stepper");
});
