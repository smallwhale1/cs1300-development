import React from "react";
import { Media } from "../data/media";
import { durationToString } from "../utils/formatting";
import { IconButton } from "@mui/material";
import { PiPlayBold, PiPlayCircle } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";

type Props = {
  media: Media;
  toggleLike: (id: string) => void;
};

const PlaylistCard = ({ media, toggleLike }: Props) => {
  return (
    <div className="playlist-card">
      <div className="playlist-card-left">
        <img
          src={media.imageUrl}
          className="playlist-card-img"
          alt="album or podcast cover media"
        />
        <div className="playlist-card-text">
          <h4>{media.name}</h4>
          <div>
            {media.creator} • {durationToString(media.duration)}
          </div>
        </div>
      </div>
      <div className="playlist-card-icon-btns">
        <FaHeart
          className="heart-icon"
          style={{ cursor: "pointer" }}
          size={16}
          color="#f88d8d"
          onClick={() => {
            toggleLike(media.id);
          }}
        />
      </div>
    </div>
  );
};

export default PlaylistCard;
