import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { Sidebar } from "../Sidebar";

// styles
import "./scaffold.scss";

// Required Props
interface ScaffoldRequiredProps {
  // The node to show
  children: React.ReactNode;
}

// Optional Props
interface ScaffoldOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface ScaffoldProps
  extends ScaffoldRequiredProps,
    ScaffoldOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: ScaffoldOptionalProps = {
  "data-testid": "eis-scaffold",
};

const Scaffold: React.FC<ScaffoldProps> = ({
  className,
  children,
  ...rest
}) => {
  const classList = classNames("eis-scaffold", className);
  return (
    <div className={classList} {...rest}>
      <Sidebar />
      {children}
    </div>
  );
};

Scaffold.defaultProps = defaultProps as Partial<ScaffoldOptionalProps>;

export default React.memo(Scaffold);
