import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Media } from "../data/media";
import PlaylistCard from "./PlaylistCard";
import { durationToString } from "../utils/formatting";

type Props = {
  mediaList: Media[];
  toggleLike: (id: string) => void;
};

const Playlist = ({ mediaList, toggleLike }: Props) => {
  const getTotalDuration = () => {
    let totalMs = 0;

    mediaList.forEach((media) => {
      totalMs += media.duration;
    });

    return durationToString(totalMs);
  };
  return (
    <div className="playlist">
      <h2 className="playlist-heading">Favorites Playlist</h2>
      {mediaList.length === 0 ? (
        <p className="playlist-text">Nothing here yet!</p>
      ) : (
        <div>
          {mediaList.filter((media) => media.type === "track").length} Tracks •{" "}
          {mediaList.filter((media) => media.type === "episode").length}{" "}
          Episodes • {getTotalDuration()} Total
        </div>
      )}
      {mediaList.filter((media) => media.type === "track").length > 0 && (
        <>
          {" "}
          <div>Song Tracks</div>
          <div className="playlist-media">
            {mediaList
              .filter((media) => media.type === "track")
              .map((media) => (
                <PlaylistCard media={media} />
              ))}
          </div>{" "}
        </>
      )}
      {mediaList.filter((media) => media.type === "episode").length > 0 && (
        <>
          <div>Podcast Episodes</div>
          <div className="playlist-media">
            {mediaList
              .filter((media) => media.type === "episode")
              .map((media) => (
                <PlaylistCard media={media} />
              ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Playlist;
