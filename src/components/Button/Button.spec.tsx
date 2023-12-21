import React from "react";
import Button from "./Button";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-button",
};

describe("Button Component", () => {
  performStandardTest(Button, defaultProps, "eis-button");
});
