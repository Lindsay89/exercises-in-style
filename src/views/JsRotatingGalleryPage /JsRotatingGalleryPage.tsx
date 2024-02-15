import React from "react";
import { JsRotatingGallery } from "../../components";

//styles
import "./jsRotatingGalleryPage.scss";

const JsRotatingGalleryPage: React.FC = () => {
  return (
    <div className="eis-jsRotatingGalleryPage">
      <h1>Rotating Gallery Page</h1>
      <p>
        This is a rotating gallery, I see it on Instagram{" "}
        <a href="https://www.instagram.com/reel/CxIl1yitgN3/?igsh=MXAzMDF1bDFoeXU4cg==">
          here.
        </a>
        It's cool but I think is not completed yet. I'll to add some more
        feature soon.
      </p>
      <JsRotatingGallery
        images={[
          "https://picsum.photos/300/600?random&category=nature",
          "https://picsum.photos/300/600?random&category=sun",
          "https://picsum.photos/300/600?random&category=sea",
          "https://picsum.photos/300/600?random&category=city",
          "https://picsum.photos/300/600?random&category=ocean",
          "https://picsum.photos/300/600?random&category=animal",
          "https://picsum.photos/300/600?random&category=forest",
        ]}
      />
    </div>
  );
};

export default JsRotatingGalleryPage;
