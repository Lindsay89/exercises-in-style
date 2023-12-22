import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { useTranslation } from "react-i18next";

// styles
import "./homePage.scss";

// Required Props
interface HomePageRequiredProps {}

// Optional Props
interface HomePageOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface HomePageProps
  extends HomePageRequiredProps,
    HomePageOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: HomePageOptionalProps = {
  "data-testid": "eis-homePage",
};

const HomePage: React.FC<HomePageProps> = ({ className, ...rest }) => {
  const classList = classNames("eis-homePage", className);
  const { t } = useTranslation();

  return (
    <div className={classList} {...rest}>
      <h1>{t("welcomeText")}</h1>
      <div>
        <p>{t("welcomeDesc")}</p>
      </div>
    </div>
  );
};

HomePage.defaultProps = defaultProps as Partial<HomePageOptionalProps>;

export default React.memo(HomePage);
