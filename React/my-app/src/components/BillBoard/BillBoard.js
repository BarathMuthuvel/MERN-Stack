import React, { useState, useEffect } from "react";
import "./BillBoard.css";

const Billboard = () => {
  const assets = [
    { type: "image", src: "image1.jpg", alt: "Image 1" },
    { type: "video", src: "video1.mp4" },
    { type: "text", text: "This is a sample text asset." },
    // Add more assets as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % assets.length);
    }, 5000); // Change asset every 5 seconds

    return () => clearInterval(interval);
  }, [assets.length]);

  const renderAsset = (asset) => {
    switch (asset.type) {
      case "image":
        return <img src={asset.src} alt={asset.alt} />;
      case "video":
        return (
          <video controls>
            <source src={asset.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      default:
        return <p>{asset.text}</p>;
    }
  };

  return <div className="billboard">{renderAsset(assets[currentIndex])}</div>;
};

export default Billboard;
