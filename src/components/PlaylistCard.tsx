import React from "react";
import { Media } from "../data/media";
import { durationToString } from "../utils/formatting";
import { IconButton } from "@mui/material";
import { PiPlayBold, PiPlayCircle } from "react-icons/pi";

type Props = {
  media: Media;
};

const PlaylistCard = ({ media }: Props) => {
  return (
    <div className="playlist-card">
      <div className="playlist-card-left">
        <img src={media.imageUrl} className="playlist-card-img" />
        <div className="playlist-card-text">
          <h4>{media.name}</h4>
          <div>
            {media.artist} • {durationToString(media.duration)}
          </div>
        </div>
      </div>
      <IconButton>
        <PiPlayCircle />
      </IconButton>
    </div>
  );
};

export default PlaylistCard;
