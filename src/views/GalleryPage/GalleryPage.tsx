import React from "react";
import { Gallery, RotatingGallery } from "../../components";

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
    <p>
      This is a rotating gallery, I see it on Instagram{" "}
      <a href="https://www.instagram.com/reel/CxIl1yitgN3/?igsh=MXAzMDF1bDFoeXU4cg==">
        here.
      </a>
      . It's cool but I think is not completed yet. I'll to add some more
      feature soon.
    </p>
    <RotatingGallery
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

export default GalleryPage;
