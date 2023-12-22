import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { Link } from "react-router-dom";

// styles
import "./sidebar.scss";

// Required Props
interface SidebarRequiredProps {}

// Optional Props
interface SidebarOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface SidebarProps
  extends SidebarRequiredProps,
    SidebarOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: SidebarOptionalProps = {
  "data-testid": "eis-sidebar",
};

const Sidebar: React.FC<SidebarProps> = ({ className, ...rest }) => {
  const classList = classNames("eis-sidebar", className);
  return (
    <div className={classList} {...rest}>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/Gallery"}>Gallery</Link>
    </div>
  );
};

Sidebar.defaultProps = defaultProps as Partial<SidebarOptionalProps>;

export default React.memo(Sidebar);
