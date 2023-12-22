import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import * as FeatherIcon from "react-feather";

// styles
import "./button.scss";

// Required Props
interface ButtonRequiredProps {
  // The function to perform on button click
  onClick: () => void;
}

// Optional Props
interface ButtonOptionalProps extends DefaultProps {
  // The button children
  children?: React.ReactNode;
  icon?: keyof typeof FeatherIcon;
}

// Combined required and optional props to build the full prop interface
export interface ButtonProps extends ButtonRequiredProps, ButtonOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: ButtonOptionalProps = {
  "data-testid": "eis-button",
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  icon,
  ...rest
}) => {
  const classList = classNames("eis-button", className);
  const Icon = icon && FeatherIcon[icon];

  return (
    <button className={classList} onClick={onClick} {...rest}>
      {children}
      {Icon && <Icon />}
    </button>
  );
};

Button.defaultProps = defaultProps as Partial<ButtonOptionalProps>;

export default React.memo(Button);
