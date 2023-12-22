import React, { useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { Link } from "react-router-dom";
import { Home, Image } from "react-feather";
import { Button } from "../Button";

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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const classList = classNames("eis-sidebar", { isOpen }, className);

  return (
    <div className={classList} {...rest}>
      <Button onClick={() => setIsOpen(!isOpen)} icon={"Menu"} />
      <h1>Exercises in style</h1>
      <div className="sidebar-content">
        <Link to={"/"}>
          <Home />
          <span className="sidebar-link">Homepage</span>
        </Link>
        <Link to={"/Gallery"}>
          <Image />
          <span className="sidebar-link">Gallery</span>
        </Link>
      </div>
    </div>
  );
};

Sidebar.defaultProps = defaultProps as Partial<SidebarOptionalProps>;

export default React.memo(Sidebar);
