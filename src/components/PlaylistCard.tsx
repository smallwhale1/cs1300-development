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
        <img src={media.imageUrl} className="playlist-card-img" />
        <div className="playlist-card-text">
          <h4>{media.name}</h4>
          <div>
            {media.creator} • {durationToString(media.duration)}
          </div>
        </div>
      </div>
      <div className="playlist-card-icon-btns">
        {/* <IconButton size="small">
          <PiPlayBold />
        </IconButton> */}
        <IconButton
          size="small"
          onClick={() => {
            toggleLike(media.id);
          }}
        >
          <FaHeart color="#f88d8d" />
        </IconButton>
      </div>
    </div>
  );
};

export default PlaylistCard;
