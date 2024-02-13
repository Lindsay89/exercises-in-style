import React from "react";
import { PPTGallery } from "../../components";

const PPTGalleryPage: React.FC = () => {
  return (
    <div>
      <h1>PPTGallery Page</h1>
      <p>
        Hi! Scrolling instagram I found this nice reel about a guy who did
        something similar to this on PowerPoint. I liked it soo much and tried
        to replicate here.
      </p>
      <a href="https://www.youtube.com/watch?v=kTfpfC-jRjI">Here's the link</a>
      <PPTGallery
        images={[
          "https://picsum.photos/1600/1000?random&category=nature",
          "https://picsum.photos/1600/1000?random&category=sea",
          "https://picsum.photos/1600/1000?random&category=city",
          "https://picsum.photos/1600/1000?random&category=forest",
        ]}
      />
    </div>
  );
};

export default PPTGalleryPage;
