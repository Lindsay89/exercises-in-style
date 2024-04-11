import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import { Button } from "../../components";

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
  const { i18n, t } = useTranslation();
  console.log(i18n);
  return (
    <div className={classList} {...rest}>
      <div className="languages-container">
        {availableLanguages.map((lang) => (
          <Button
            onClick={() => i18n.changeLanguage(lang)}
            key={lang}
            className={i18n.language.includes(lang) ? "primary" : ""}
          >
            {lang}
          </Button>
        ))}
      </div>

      <h1>{t("welcomeText")}</h1>
      <div>
        <p>{t("whoAmI")}</p>
        <p>{t("welcomeDesc")}</p>
      </div>
    </div>
  );
};

HomePage.defaultProps = defaultProps as Partial<HomePageOptionalProps>;

export default React.memo(HomePage);
