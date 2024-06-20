/**
 * This function exports the component basic structure.
 */

exports.createComponentFile = (name, prjName) => {
  const componentName =
    name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
  const componentClassName =
    name.slice(0, 1).toLowerCase() + name.slice(1, name.length);
  const nextPrjName =
    prjName.slice(0, 1).toLowerCase() + prjName.slice(1, prjName.length);

  return `import React, { forwardRef } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./${componentClassName}.scss";

// Required Props
interface ${componentName}RequiredProps {}

// Optional Props
interface ${componentName}OptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface ${componentName}Props extends ${componentName}RequiredProps, ${componentName}OptionalProps {}


const ${componentName} = forwardRef<HTMLDivElement, ${componentName}Props> (({ className, ...rest }, ref) => {
  const classList = classNames("${nextPrjName}-${componentClassName}", className);
  return (
    <div className={classList} data-testid={ "${nextPrjName}-${componentClassName}"} {...rest} ref={ref}>
      Hello 👋, I am a ${componentName} component.
    </div>
  );
});

export default React.memo(${componentName});
`;
};
