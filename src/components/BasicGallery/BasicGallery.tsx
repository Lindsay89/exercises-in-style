import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./basicGallery.scss";

// Required Props
interface BasicGalleryRequiredProps {
  // An array of images to show
  images: string[];
}

// Optional Props
interface BasicGalleryOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface BasicGalleryProps
  extends BasicGalleryRequiredProps,
    BasicGalleryOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: BasicGalleryOptionalProps = {
  "data-testid": "eis-basicGallery",
};

const BasicGallery: React.FC<BasicGalleryProps> = ({
  className,
  images,
  ...rest
}) => {
  const classList = classNames("eis-basicGallery", className);
  return (
    <div className={classList} {...rest}>
      {images.map((img, index) => (
        <span
          key={img}
          style={{ "--imgPosition": index } as React.CSSProperties}
          className="gallery-image"
        >
          <img src={img} alt={img} />
        </span>
      ))}
    </div>
  );
};

BasicGallery.defaultProps = defaultProps as Partial<BasicGalleryOptionalProps>;

export default React.memo(BasicGallery);
