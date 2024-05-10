import React, { useState } from "react";
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
interface ScaffoldOptionalProps extends DefaultProps {
  // hide scrollbar
  hideScrollbar?: boolean;
}

// Combined required and optional props to build the full prop interface
export interface ScaffoldProps
  extends ScaffoldRequiredProps,
    ScaffoldOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: ScaffoldOptionalProps = {
  "data-testid": "eis-scaffold",
  hideScrollbar: false,
};

const Scaffold: React.FC<ScaffoldProps> = ({
  className,
  hideScrollbar,
  children,
  style,
  ...rest
}) => {
  const classList = classNames("eis-scaffold", { hideScrollbar }, className);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className={classList} {...rest}>
      <Sidebar isOpen={isOpen} setIsOpen={handleIsOpen} />
      <div className="scaffold-content">{children}</div>
    </div>
  );
};

Scaffold.defaultProps = defaultProps as Partial<ScaffoldOptionalProps>;

export default React.memo(Scaffold);
