import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const [images, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      let response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      let data = await response.json();
      console.log(data);
      if (data) {
        setImage(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  if (errorMsg !== null) {
    return <div>Error! {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((img, index) => (
            <img
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              key={img.id}
              src={img.download_url}
              alt={img.author}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
              onClick={() => setCurrentSlide(index)}
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
