import React, { Children, useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./sidebar.scss";
import SidebarAnimatedItem from "./SidebarAnimatedItem";

// Required Props
interface SiderbarGroupRequiredProps {
  // Sidebar group element
  children: React.ReactNode;
  // the group category
  categoryName: string;
  // the category icon
  icon: React.ReactNode;
}

// Optional Props
interface SiderbarGroupOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface SiderbarGroupProps
  extends SiderbarGroupRequiredProps,
    SiderbarGroupOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: SiderbarGroupOptionalProps = {
  "data-testid": "eis-SiderbarGroup",
};

const SiderbarGroup: React.FC<SiderbarGroupProps> = ({
  className,
  categoryName,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classList = classNames("eis-siderbarGroup", { isOpen }, className);
  const handleCategoryOpen = () => setIsOpen(!isOpen);

  return (
    <dl className={classList}>
      <dt className="sidebarGroup-title" onClick={handleCategoryOpen}>
        {icon}
        <SidebarAnimatedItem label={categoryName} />
      </dt>
      <div className="sidebarGroup-items">
        {Children.map(children, (child) => (
          <dd>{child}</dd>
        ))}
      </div>
    </dl>
  );
};

SiderbarGroup.defaultProps =
  defaultProps as Partial<SiderbarGroupOptionalProps>;

export default React.memo(SiderbarGroup);
