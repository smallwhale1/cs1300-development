import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MediaList from "./components/MediaList";
import Playlist from "./components/Playlist";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="main">
        <MediaList />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
