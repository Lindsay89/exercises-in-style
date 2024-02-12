import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { Link } from "react-router-dom";

// styles
import "./sidebar.scss";
import SidebarAnimatedItem from "./SidebarAnimatedItem";

// Required Props
interface SidebarItemRequiredProps {
  //The page to show
  icon: React.ReactNode;
  // The label to show into the sidebar
  label: string;
  // The redirect link
  linkTo: string;
}

// Optional Props
interface SidebarItemOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface SidebarItemProps
  extends SidebarItemRequiredProps,
    SidebarItemOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: SidebarItemOptionalProps = {
  "data-testid": "eis-sidebarItem",
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  linkTo,
  label,
  className,
  ...rest
}) => {
  const classList = classNames("eis-sidebarItem", className);

  return (
    <Link to={linkTo} className={classList}>
      {icon}
      <SidebarAnimatedItem label={label} />
    </Link>
  );
};

SidebarItem.defaultProps = defaultProps as Partial<SidebarItemOptionalProps>;

export default React.memo(SidebarItem);
