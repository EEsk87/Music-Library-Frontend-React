import "./App.css";
import Header from "./Components/Header/Header";
import NewSongCard from "./Components/NewSong/NewSong";
import SongItem from "./Components/SongItem/SongItem";
import TrackList from "./Components/TrackList/TrackList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7274/api/Songs/");

      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch song request: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const selectedSong = song[activeIndex];

  return (
    <div className="App">
      <Header />

      <div className="flex-container">
        <TrackList
          songs={songs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <SongInfo songObj={selectedSong} />
        <NewSongCard onNewSong={fetchSongs} />
      </div>
    </div>
  );
}

export default App;
