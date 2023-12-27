import React from "react";
import { Gallery } from "../../components";
import { BasicGallery } from "../../components/BasicGallery";

const GalleryPage: React.FC = () => (
  <div>
    <h1>Gallery Page</h1>
    <p>
      Hi! Scrolling instagram I found this nice reel about a guy who did
      something similar to this on PowerPoint. I liked it soo much and tried to
      replicate here.
    </p>
    <a href="https://www.youtube.com/watch?v=kTfpfC-jRjI">Here's the link</a>
    <Gallery
      images={[
        "https://picsum.photos/1600/1000?random&category=nature",
        "https://picsum.photos/1600/1000?random&category=sea",
        "https://picsum.photos/1600/1000?random&category=city",
        "https://picsum.photos/1600/1000?random&category=forest",
      ]}
    />
    <BasicGallery
      images={[
        "https://picsum.photos/300/600?random&category=nature",
        "https://picsum.photos/300/600?random&category=sea",
        "https://picsum.photos/300/600?random&category=city",
        "https://picsum.photos/300/600?random&category=ocean",
        "https://picsum.photos/300/600?random&category=animal",
        "https://picsum.photos/300/600?random&category=forest",
      ]}
    />
  </div>
);

export default GalleryPage;
