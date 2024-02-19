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
  let interval = useRef();

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
  var startRotationValue = 0;
  const startRotation = () => {
    const container = document.getElementsByClassName(
      "jsRotatingGallery-container"
    )[0];
    // ++is incrementing startRotationValue by 1
    const value = ++startRotationValue % 360;
    container.style.setProperty("transform", `rotateY(${value}deg)`);
  };
  const handleOnImgMouseEnter = (e, index) => {

    const content = document.getElementsByClassName(
      "jsRotatingGallery-content"
    )[0];
    const rotateValueCalc =
      360 - (360 / images.length) * index - startRotationValue;
    clearInterval(interval.current);

    content.style.setProperty("transform", `rotateY(${rotateValueCalc}deg)`);
    e.target.style.setProperty("transform", "scale(2)");
    /* 
    e.stopPropagation();
    e.preventDefault(); */
  };
  const handleOnMouseLeave = (e, index) => {
    interval.current = setInterval(startRotation, 50);
    e.target.style.setProperty("transform", "scale(1)");
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
              onMouseLeave={(e) => handleOnMouseLeave(e, index)}
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
