import React from "react";
import { Media, mediaList } from "../data/media";
import MediaCard from "./MediaCard";

type Props = {
  mediaList: Media[];
  toggleLike: (id: string) => void;
};

const MediaList = ({ mediaList, toggleLike }: Props) => {
  return (
    <div className="media-list">
      {mediaList.map((media) => (
        <MediaCard key={media.id} media={media} toggleLike={toggleLike} />
      ))}
    </div>
  );
};

export default MediaList;
