import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./sidebar.scss";

// Required Props
interface SidebarAnimatedItemRequiredProps {
  // the label to show
  label: string
}

// Optional Props
interface SidebarAnimatedItemOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface SidebarAnimatedItemProps
  extends SidebarAnimatedItemRequiredProps,
    SidebarAnimatedItemOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: SidebarAnimatedItemOptionalProps = {
  "data-testid": "eis-sidebarAnimatedItem",
};

const SidebarAnimatedItem: React.FC<SidebarAnimatedItemProps> = ({
  label,
  className,
}) => {
  const classList = classNames("eis-sidebarAnimatedItem", className);

  return <span className={classList}>{label}</span>;
};

SidebarAnimatedItem.defaultProps =
  defaultProps as Partial<SidebarAnimatedItemOptionalProps>;

export default React.memo(SidebarAnimatedItem);
