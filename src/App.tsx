import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MediaList from "./components/MediaList";
import Playlist from "./components/Playlist";
import Topbar from "./components/Topbar";
import { mediaList } from "./data/media";

function App() {
  const [media, setMedia] = useState(mediaList);

  const toggleLike = (id: string) => {
    setMedia((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          return { ...m, favorited: !m.favorited };
        }
        return m;
      })
    );
  };

  return (
    <div className="App">
      <Topbar />
      <div className="main">
        <MediaList mediaList={media} toggleLike={toggleLike} />
        <Playlist
          mediaList={media.filter((m) => m.favorited)}
          toggleLike={toggleLike}
        />
      </div>
    </div>
  );
}

export default App;
