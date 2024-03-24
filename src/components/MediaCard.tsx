import React from "react";
import { Media } from "../data/media";
import { durationToString } from "../utils/formatting";
import { IconButton } from "@mui/material";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { PiPlayBold } from "react-icons/pi";

type Props = {
  media: Media;
};

const MediaCard = ({ media }: Props) => {
  return (
    <div className="media-card">
      <img className="media-img" src={media.imageUrl} />
      <div className="media-text">
        <h3>{media.name}</h3>
        <p>
          {media.artist} • {durationToString(media.duration)}
        </p>
        <div className="media-footer">
          <span className="media-type">{media.type}</span>
          <div className="media-icons">
            <IconButton>
              <PiPlayBold />
            </IconButton>
            <IconButton>
              <FaRegHeart />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
