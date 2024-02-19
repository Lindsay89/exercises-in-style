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
    /* container.style.setProperty('animation-play-state','running') */
    container.classList.add("animation-active");
    const { width } = container.getBoundingClientRect();
    for (let i = 0; i < images.length; i += 1) {
      const rotateValueCalc = (360 / images.length) * i;
      const rotateValue = ` rotateY(${rotateValueCalc}deg)`;
      const transformValue = ` ${rotateValue} translateZ(${width / 2}px)`;
      images[i].style.setProperty("transform", transformValue);
    }
    interval.current = setInterval(() => console.log("ciao"), 2000);
    container.classList.add("rotation-animation");
  }, []);

  const handleOnImgMouseEnter = (e, index) => {
    console.log(index);
    const content = document.getElementsByClassName(
      "jsRotatingGallery-content"
    )[0];
    const container = document.getElementsByClassName(
      "jsRotatingGallery-container"
    )[0];
    const rotateValueCalc = 360 - (360 / images.length) * index;
    clearInterval(interval.current);
    container.classList.add("animation-stop");
    document
      .getElementsByClassName("jsRotatingGallery-content")[0]
      .style.setProperty("transform", `rotateY(${rotateValueCalc}deg)`);
    e.target.style.setProperty("transform", "scale(2)");
    document
      .getElementsByClassName("jsRotatingGallery-container")[0]
      .style.setProperty("animation-play-state", "paused");
    /* 
    e.stopPropagation();
    e.preventDefault(); */
  };
  const handleOnMouseLeave = (e, index) => {
    /* document
      .getElementsByClassName("jsRotatingGallery-container")[0]
      .style.setProperty("animation-play-state", "running"); */
    document
      .getElementsByClassName("jsRotatingGallery-container")[0]
      .classList.remove("animation-stop");
    document
      .getElementsByClassName("jsRotatingGallery-container")[0]
      .style.setProperty("animation-play-state", "running");
    e.target.style.setProperty("transform", "scale(1)");
    e.stopPropagation();
    e.preventDefault();
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
