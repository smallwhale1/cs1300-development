import React, { useEffect, useRef, useState } from "react";
import { Media } from "../data/media";
import { durationToString } from "../utils/formatting";
import { IconButton, Skeleton } from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

type Props = {
  media: Media;
  toggleLike: (id: string) => void;
};

const MediaCard = ({ media, toggleLike }: Props) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    setShowCard(true);
    const handleResize = () => {
      const width = cardRef.current?.getBoundingClientRect().width;
      if (width) {
        // Account for padding
        setCardHeight(width - 32);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardRef]);

  return (
    <div className="media-card" ref={cardRef}>
      <div className="media-img-wrapper">
        <Skeleton
          sx={{
            borderRadius: "8px",
          }}
          variant="rectangular"
          width={"100%"}
          height={cardHeight}
        />
        <img
          alt={`album or podcast cover media for ${media.name}`}
          onLoad={() => setImgLoaded(true)}
          className={`media-img ${imgLoaded && "media-img-loaded"}`}
          src={media.imageUrl}
        />
      </div>
      {showCard && (
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
              {media.favorited ? (
                <FaHeart
                  className="heart-icon"
                  size={24}
                  color="#f88d8d"
                  onClick={() => {
                    toggleLike(media.id);
                  }}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaRegHeart
                  className="heart-icon"
                  size={24}
                  color="#777777"
                  onClick={() => {
                    toggleLike(media.id);
                  }}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCard;
