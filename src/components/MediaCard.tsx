import React from "react";
import { Media } from "../data/media";
import { durationToString } from "../utils/formatting";
import { IconButton } from "@mui/material";
import { FaHeart, FaPlay, FaRegHeart } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { PiPlayBold } from "react-icons/pi";

type Props = {
  media: Media;
  toggleLike: (id: string) => void;
};

const MediaCard = ({ media, toggleLike }: Props) => {
  return (
    <div className="media-card">
      <div className="media-img-wrapper">
        <img className="media-img" src={media.imageUrl} />
        {/* <p className="media-genre">{media.genre}</p> */}
      </div>
      <div className="media-text">
        <h3>{media.name}</h3>
        <p>
          {media.creator} • {durationToString(media.duration)}
        </p>
        <div className="media-footer">
          <div className="media-tags">
            <span className="media-type">{media.type}</span>
            <span className="media-type">{media.genre}</span>
          </div>
          <div className="media-icons">
            {/* <IconButton>
              <PiPlayBold />
            </IconButton> */}
            <IconButton
              onClick={() => {
                toggleLike(media.id);
              }}
            >
              {media.favorited ? <FaHeart color="#f88d8d" /> : <FaRegHeart />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
