/**
 * This function exports the structure of  the components' spec file
 */
exports.createComponentTestFile = (name, prjName, scssClassName) => {
  return `import React from "react";
import ${name} from "./${name}";
import performStandardTest from "../../utils/functions/performStandardTests";

const defaultProps = {
  "data-testid": "${prjName}-${scssClassName}",
};

describe("${name} Component", () => {
  performStandardTest(${name}, defaultProps, "${prjName}-${scssClassName}");
});
`;
};
