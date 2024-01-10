import React, { useState } from "react";
import axios from "axios";
import TextField from "../TextField/TextField";

const NewSongCard = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      album,
      artist,
      releaseDate,
      genre,
    };

    try {
      const response = await axios.post(
        "https://localhost:7274/api/Songs/",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("error submitting new song ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Album" value={album} onChange={album} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <TextField label="Genre" value={genre} onChange={setGenre} />

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add Song
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSongCard;
