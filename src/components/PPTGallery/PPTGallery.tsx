import React, { useState, createRef, useEffect } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./pptGallery.scss";

// Required Props
interface PPTGalleryRequiredProps {
  // Array of images to show
  images: string[];
}

// Optional Props
interface PPTGalleryOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface PPTGalleryProps
  extends PPTGalleryRequiredProps,
    PPTGalleryOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: PPTGalleryOptionalProps = {
  "data-testid": "eis-pptGallery",
};

const PPTGallery: React.FC<PPTGalleryProps> = ({ className, images, ...rest }) => {
  const classList = classNames("eis-pptGallery", className);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const ref = createRef<HTMLDivElement>();

  const [position, setPosition] = useState<number>(
    (ref.current?.clientHeight as number) / 2 - 80
  );
  const handleImageSelection = (img: number) => {
    if (ref.current) {
      setPosition(ref.current?.clientHeight / 2 - 80);
    }
    setSelectedImage(img);
  };
  useEffect(() => {
    if (ref.current) {
      setPosition((ref.current?.clientHeight as number) / 2 - 80);
    }
  }, [ref]);

  const calculatePositions = (index: number) => {
    if (index > selectedImage)
      return (
        position +
        168 +
        120 * (index - selectedImage - 1) +
        (index - selectedImage) * 20 +
        "px"
      );
    return (
      position -
      120 * (selectedImage - index) -
      (selectedImage - index) * 20 +
      "px"
    );
  };

  return (
    <div className={classList} {...rest} ref={ref}>
      {images.map((img, index) => (
        <div
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
          className={
            index === selectedImage
              ? "pptGallery-background-image selected"
              : "pptGallery-background-image"
          }
          key={img}
        />
      ))}

      <div className="images-container">
        <div className="images-scroll">
          {images.map((image, index) => (
            <div
              key={image}
              style={{
                backgroundImage: `url(${image})`,
                top:
                  selectedImage === index
                    ? position + "px"
                    : calculatePositions(index),
              }}
              className={
                selectedImage === index ? "selected-image image" : "image"
              }
              onClick={() => handleImageSelection(index)}
            />
          ))}
        </div>
        <p className="image-description">some fancy description</p>
        <div className="random-columns">
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 31) + 50}%` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 31) + 50}%` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 31) + 50}%` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 31) + 50}%` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 31) + 50}%` }}
          />
        </div>
      </div>
    </div>
  );
};

PPTGallery.defaultProps = defaultProps as Partial<PPTGalleryOptionalProps>;

export default React.memo(PPTGallery);
