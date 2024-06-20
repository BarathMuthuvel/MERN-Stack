import React, { useState } from "react";

const Star = ({ filled, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", color: filled ? "gold" : "gray" }}
    >
      &#9733;
    </span>
  );
};

const StarRatings = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRatings;
