import React, { MouseEventHandler, useEffect, useRef } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./jsRotatingGallery.scss";

// Required Props
interface JsRotatingGalleryRequiredProps {
  // An array of images to show
  images: string[];
}

// Optional Props
interface JsRotatingGalleryOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface JsRotatingGalleryProps
  extends JsRotatingGalleryRequiredProps,
    JsRotatingGalleryOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: JsRotatingGalleryOptionalProps = {
  "data-testid": "eis-jsRotatingGallery",
};

const JsRotatingGallery: React.FC<JsRotatingGalleryProps> = ({
  className,
  images,
  ...rest
}) => {
  const classList = classNames("eis-jsRotatingGallery", className);
  let interval = useRef<NodeJS.Timer>();
  let startRotationValue = useRef<number>(0);

  useEffect(() => {
    const images = document.getElementsByClassName(
      "jsRotatingGallery-image"
    ) as HTMLCollectionOf<HTMLImageElement>;
    const container = document.getElementsByClassName(
      "jsRotatingGallery-container"
    )[0];

    container.classList.add("animation-active");
    const { width } = container.getBoundingClientRect();
    for (let i = 0; i < images.length; i += 1) {
      const rotateValueCalc = (360 / images.length) * i;
      const rotateValue = ` rotateY(${rotateValueCalc}deg)`;
      const transformValue = ` ${rotateValue} translateZ(${width / 2}px)`;
      images[i].style.setProperty("transform", transformValue);
    }
    interval.current = setInterval(startRotation, 50);
    container.classList.add("rotation-animation");

    // Cleanup function to clear interval
    return () => clearInterval(interval.current);
  }, []);
  const startRotation = () => {
    const container = document.getElementsByClassName(
      "jsRotatingGallery-container"
    )[0] as HTMLDivElement;
    // ++is incrementing startRotationValue by 1

    startRotationValue.current = ++startRotationValue.current % 360;
    container.style.setProperty(
      "transform",
      `rotateY(${startRotationValue.current}deg)`
    );
  };
  const handleOnImgMouseEnter = (
    e: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    const content = document.getElementsByClassName(
      "jsRotatingGallery-content"
    )[0] as HTMLDivElement;
    const rotateValueCalc =
      360 - (360 / images.length) * index - startRotationValue.current;
    clearInterval(interval.current);

    content.style.setProperty("transform", `rotateY(${rotateValueCalc}deg)`);
    (e.target as HTMLImageElement).style.setProperty("transform", "scale(2)");
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    interval.current = setInterval(startRotation, 50);
    (e.target as HTMLImageElement).style.setProperty("transform", "scale(1)");
  };

  return (
    <div className={classList} {...rest}>
      <div className="jsRotatingGallery-container">
        <div className="jsRotatingGallery-content">
          {images.map((img, index) => (
            <span
              key={img}
              style={{ "--imgPosition": index } as React.CSSProperties}
              className="jsRotatingGallery-image"
              onMouseEnter={(e) => handleOnImgMouseEnter(e, index)}
              onMouseLeave={(e) => handleOnMouseLeave(e)}
            >
              <img src={img} alt={img} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

JsRotatingGallery.defaultProps =
  defaultProps as Partial<JsRotatingGalleryOptionalProps>;

export default React.memo(JsRotatingGallery);
