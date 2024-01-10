import React from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./rotatingGallery.scss";

// Required Props
interface RotatingGalleryRequiredProps {
  // An array of images to show
  images: string[];
}

// Optional Props
interface RotatingGalleryOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface RotatingGalleryProps
  extends RotatingGalleryRequiredProps,
    RotatingGalleryOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: RotatingGalleryOptionalProps = {
  "data-testid": "eis-RotatingGallery",
};

const RotatingGallery: React.FC<RotatingGalleryProps> = ({
  className,
  images,
  ...rest
}) => {
  const classList = classNames("eis-rotatingGallery", className);

  return (
    <div className={classList} {...rest}>
      <div className="rotating-container">
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
    </div>
  );
};

RotatingGallery.defaultProps =
  defaultProps as Partial<RotatingGalleryOptionalProps>;

export default React.memo(RotatingGallery);
