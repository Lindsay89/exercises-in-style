import React from "react";
import { render } from "@testing-library/react";
import { DefaultProps } from "../types/defaultProps";

const performStandardTest = (
  Component: React.FunctionComponent<any>,
  defaultProps: DefaultProps,
  defaultClassName: string
) => {
  const dataTestId = defaultProps["data-testid"] as string;
  it("should render without explode", () => {
    const { getByTestId } = render(<Component {...defaultProps} />);

    expect(getByTestId(dataTestId)).toMatchSnapshot();
  });

  it('should accept an "id" prop', () => {
    const { getByTestId } = render(<Component {...defaultProps} id="foo-id" />);

    expect(getByTestId(dataTestId).id).toBe("foo-id");
  });

  it("should have default className", () => {
    const { getByTestId } = render(<Component {...defaultProps} />);

    expect(getByTestId(dataTestId).classList?.contains(defaultClassName)).toBe(
      true
    );
  });

  it("should allow adding custom classes", () => {
    const { getByTestId } = render(
      <Component {...defaultProps} className="bar" />
    );

    expect(getByTestId(dataTestId).classList.contains("bar")).toBe(true);
  });

  it("should allow to define custom style", () => {
    const { getByTestId } = render(
      <Component {...defaultProps} style={{ margin: "30px" }} />
    );

    expect(getByTestId(dataTestId).getAttribute("style")).toContain("margin");
  });

  it("should accept a ref reference", () => {
    const ref = React.createRef();
    render(
      <Component {...defaultProps} style={{ margin: "30px" }} ref={ref} />
    );

    // Assert that the component is rendered and accessible through the ref
    expect(ref.current).toBeInTheDocument();
  });
};
export default performStandardTest;
