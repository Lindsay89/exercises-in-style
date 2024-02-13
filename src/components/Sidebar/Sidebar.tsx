import React, { useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { Home, Image } from "react-feather";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";

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
  const { t } = useTranslation();

  return (
    <div className={classList} {...rest}>
      <Button onClick={() => setIsOpen(!isOpen)} icon={"Menu"} />
      <div className="sidebar-title">
        <h1 className="extended-title">{t("exercisesInStyle")}</h1>
        <h1 className="title">{t("eis")}</h1>
      </div>
      <div className="sidebar-content">
        <SidebarItem linkTo="/" label={t("homepage")} icon={<Home />} />
        {<SidebarGroup categoryName={t("galleries")} icon={<Image />}>
          <SidebarItem
            linkTo="/PPTGallery"
            label={t("pptGallery")}
            icon={<Image />}
          />
          <SidebarItem
            linkTo="/RotatingGallery"
            label={t("rotatingGallery")}
            icon={<Image />}
          />
        </SidebarGroup>}
      </div>
    </div>
  );
};

Sidebar.defaultProps = defaultProps as Partial<SidebarOptionalProps>;

export default React.memo(Sidebar);
