import React, { useEffect, useState } from "react";

const IMG_URL = "https://picsum.photos/v2/list?page=1&limit=5";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(IMG_URL);
        const data = await response.json();
        setImages(data);
      } catch (err) {
        console.log("Error fetching images", err);
      }
    };

    fetchImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={handlePrev}
        className="bg-slate-50 shadow-lg text-black px-4 py-2 rounded-full mr-4"
      >
        &lt;
      </button>
      <div className="text-center">
        <img
          src={images[currentIndex].download_url}
          alt={images[currentIndex].author}
          className="w-96 h-auto mx-auto rounded-lg"
        />
        <p className="mt-4 text-lg">{images[currentIndex].author}</p>
      </div>
      <button
        onClick={handleNext}
        className="bg-slate-50 shadow-lg text-black px-4 py-2 rounded-full ml-4"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
