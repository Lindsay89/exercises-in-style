import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import { Button, Scaffold, Sidebar } from "../../components";

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
  const [homePageClasses, setHomePageClasses] = useState(classList);
  const [hideSidebar, setHideSidebar] = useState(true);

  const handleLineClasses = () => {
    setHomePageClasses(homePageClasses + " with-sidebar");
    setHideSidebar(false);

    setTimeout(() => document.getElementById("line-container")?.remove(), 2000);
  };

  return (
    <Scaffold hideScrollbar={hideSidebar} className={homePageClasses}>
      <div {...rest}>
        <div className="languages-container">
          {availableLanguages.map((lang) => (
            <Button
              onClick={() => i18n.changeLanguage(lang)}
              key={lang}
              className={
                i18n.language.includes(lang)
                  ? "language-button selected outlined"
                  : "language-button primary"
              }
            >
              {lang}
            </Button>
          ))}
        </div>
        <h1>{t("welcomeText")}</h1>
        <div>
          <p>{t("welcomeDesc")}</p>
        </div>
      </div>

      <Button
        className={"line-container"}
        onClick={handleLineClasses}
        type="primary"
        id="line-container"
      >
        <div className="line top" />
        <div className="line center" />
        <div className="line bottom" />
      </Button>
    </Scaffold>
  );
};

HomePage.defaultProps = defaultProps as Partial<HomePageOptionalProps>;

export default React.memo(HomePage);
