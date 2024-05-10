import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";
import * as FeatherIcon from "react-feather";
import { SizeStandard } from "../../utils/types/size";

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
  // The button' size
  size?: SizeStandard;
  // The button's type
  type?: "primary" | "secondary" | "ghost";
  rounded?: boolean;
  outlined?: boolean;
  icon?: keyof typeof FeatherIcon;
}

// Combined required and optional props to build the full prop interface
export interface ButtonProps
  extends ButtonRequiredProps,
    ButtonOptionalProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {}

// use the optional prop interface to define the default props
const defaultProps: ButtonOptionalProps = {
  "data-testid": "eis-button",
  size: "medium",
  type: "primary",
  rounded: false,
  outlined: false,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      onClick,
      size,
      type,
      rounded,
      outlined,
      icon,
      ...rest
    },
    ref
  ) => {
    const classList = classNames(
      "eis-button",
      size,
      type,
      { rounded },
      { outlined },
      className
    );
    const Icon = icon && FeatherIcon[icon];

    return (
      <button ref={ref} className={classList} onClick={onClick} {...rest}>
        {children}
        {Icon && <Icon />}
      </button>
    );
  }
);

Button.defaultProps = defaultProps as Partial<ButtonOptionalProps>;

export default React.memo(Button);
