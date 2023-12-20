import React, { useState } from "react";
import classNames from "classnames";
import { DefaultProps } from "../../utils/types";

// styles
import "./gallery.scss";

// Required Props
interface GalleryRequiredProps {
  // Array of images to show
  images: string[];
}

// Optional Props
interface GalleryOptionalProps extends DefaultProps {}

// Combined required and optional props to build the full prop interface
export interface GalleryProps
  extends GalleryRequiredProps,
    GalleryOptionalProps {}

// use the optional prop interface to define the default props
const defaultProps: GalleryOptionalProps = {
  "data-testid": "eis-gallery",
};

const Gallery: React.FC<GalleryProps> = ({ className, images, ...rest }) => {
  const classList = classNames("eis-gallery", className);
  const [selectedImage, setSelectedImage] = useState<string>(images[1]);
  console.log(images);
  return (
    <div className={classList} {...rest}>
      <div
        style={{ backgroundImage: `url(${selectedImage})` }}
        className="gallery-background-image"
      >
        <div className="images-scroll">
          {images.map((image) => (
            <div
              key={image}
              style={{ backgroundImage: `url(${image})`, width: "10rem" }}
              className="image"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <p className="-image-description">some fancy description</p>
        <div className="random-columns">
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 6) + 15}rem` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 6) + 15}rem` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 6) + 15}rem` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 6) + 15}rem` }}
          />
          <div
            className="column"
            style={{ height: `${Math.floor(Math.random() * 6) + 15}rem` }}
          />
        </div>
      </div>
    </div>
  );
};

Gallery.defaultProps = defaultProps as Partial<GalleryOptionalProps>;

export default React.memo(Gallery);
