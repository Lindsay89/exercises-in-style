import React from "react";
import Button from "./Button";
import performStandardTest from "../../utils/functions/performStandardTest";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

const defaultProps = {
  "data-testid": "eis-button",
  onClick: jest.fn(),
};

describe("Button Component", () => {
  performStandardTest(Button, defaultProps, "eis-button");

  it("should perform a button click when function is provided", () => {
    const onClickFn = jest.fn();
    render(<Button onClick={onClickFn}>click</Button>);

    const EisButton = screen.getByRole("button");
    fireEvent.click(EisButton);
    expect(onClickFn).toHaveBeenCalled();
  });

  it("should render in the correct size when provided", () => {
    const { rerender } = render(
      <Button {...defaultProps} size="small">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("small");

    rerender(
      <Button {...defaultProps} size="medium">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("medium");

    rerender(
      <Button {...defaultProps} size="large">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("large");
  });

  it("should render in the correct type when provided", () => {
    const { rerender } = render(
      <Button {...defaultProps} type="primary">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("primary");

    rerender(
      <Button {...defaultProps} type="secondary">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("secondary");

    rerender(
      <Button {...defaultProps} type="ghost">
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("ghost");
  });
  it("should be rounded by default", () => {
    render(<Button {...defaultProps}>click</Button>);

    expect(screen.getByRole("button")).toHaveClass("rounded");
  });
  it("should be outlined if outlined prop is provided", () => {
    render(
      <Button {...defaultProps} outlined>
        click
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass("outlined");
  });
});
