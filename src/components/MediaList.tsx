import React from "react";
import { mediaList } from "../data/media";
import MediaCard from "./MediaCard";

type Props = {};

const MediaList = (props: Props) => {
  return (
    <div className="media-list">
      {mediaList.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  );
};

export default MediaList;
