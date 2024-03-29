import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MediaList from "./components/MediaList";
import Playlist from "./components/Playlist";
import Topbar from "./components/Topbar";
import { mediaList } from "./data/media";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

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

  const clearPlaylist = () => {
    setMedia((prev) => prev.map((elem) => ({ ...elem, favorited: false })));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Topbar />
        <div className="main">
          <MediaList mediaList={media} toggleLike={toggleLike} />
          <Playlist
            mediaList={media.filter((m) => m.favorited)}
            toggleLike={toggleLike}
            clearPlaylist={clearPlaylist}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
