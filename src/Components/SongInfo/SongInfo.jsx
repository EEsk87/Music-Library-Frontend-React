import "./SongInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SongInfo = ({ songObj }) => {
  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7274/api/Songs/");
    } catch (error) {
      console.warn("error fetching song title: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [songObj]);

  return (
    songObj && (
      <div className="flex-item">
        <h4>{songObj.title}</h4>

        <div>
          <div className="data-item">
            <span>Title</span>
            <span> {songObj.title}</span>
          </div>
          <div className="data-item">
            <span> Album</span>
            <span>{songObj.album} </span>
          </div>
          <div className="data-item">
            <span>Artist</span>
            <span>{songObj.artist}</span>
          </div>

          <div className="data-item" />
          <span> Release Date</span>
          <span>{songObj?.release_date} </span>
        </div>
        <div className="data-item">
          <span>Genre</span>
          <span>{songObj.genre}</span>
        </div>
        <div />
      </div>
    )
  );
};

export default SongInfo;
