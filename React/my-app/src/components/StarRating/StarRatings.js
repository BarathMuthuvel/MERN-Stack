import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './starRating.css'

const StarRatings = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getIndex) {
    setRating(getIndex);
  }
  function handleMouseEnter(getIndex) {
    setHover(getIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRatings;
