import React, { useState } from "react";
import "./SongItem.css";

const SongItem = ({ title, activeIndex, setActiveIndex, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? "btn btn-success" : "btn btn-secondary";
  const activeClass = index === activeIndex ? "active-song" : "";

  return (
    <div onClick={handleActive} className={`song-item ${activeClass}`}>
      <span>{title}</span>
      <button className={btnClass} onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

export default SongItem;
