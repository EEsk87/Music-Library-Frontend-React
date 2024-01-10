import songItem from "../SongItem/SongItem";

const TrackList = ({ songs = [], activeIndex, setActiveIndex }) => {
  const SongItem = songs.map((song, i) => (
    <SongItem
      key={song.title}
      title={song.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  return (
    <div className="flex-item">
      <h4>My Library</h4>
      <div>{songItem}</div>
    </div>
  );
};

export default TrackList;
