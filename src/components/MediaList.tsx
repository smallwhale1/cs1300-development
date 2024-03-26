import React, { useState } from "react";
import { Media, mediaList } from "../data/media";
import MediaCard from "./MediaCard";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { IoFilter } from "react-icons/io5";

type Props = {
  mediaList: Media[];
  toggleLike: (id: string) => void;
};

enum MediaFilter {
  ALL = "all",
  TRACK = "track",
  EPISODE = "episode",
}

const MediaList = ({ mediaList, toggleLike }: Props) => {
  const [mediaFilter, setMediaFilter] = useState(MediaFilter.ALL);
  const [sortType, setSortType] = useState<"default" | "asc" | "desc">(
    "default"
  );

  const getFilteredList = () => {
    if (mediaFilter === MediaFilter.ALL) {
      return mediaList;
    }
    return mediaList.filter((media) => media.type === mediaFilter);
  };

  return (
    <div className="media-area">
      <div className="media-nav">
        <h3>Browse Songs and Podcasts</h3>
        {/* Move to theme */}
        {/* <Button style={{ color: "#505050", display: "flex", gap: "0.5rem" }}>
          show filters <IoFilter />
        </Button> */}
        {/* Duration */}
        <div className="media-filters">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Sort duration..."
                value={10}
                label="Sort"
                onChange={() => {}}
              >
                <MenuItem value={10}>Default</MenuItem>
                <MenuItem value={20}>Duration Asc</MenuItem>
                <MenuItem value={30}>Duration Desc</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Select
            labelId="media-select-label"
            id="media-select"
            value={"pop"}
            label="media-filter"
            onChange={(e) => {}}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pop">Pop</MenuItem>
            <MenuItem value="classical">Classical</MenuItem>
            <MenuItem value="news">News</MenuItem>
          </Select>
          {/* Type */}
          <Select
            labelId="media-select-label"
            id="media-select"
            value={mediaFilter}
            label="media-filter"
            onChange={(e) => {
              setMediaFilter(e.target.value as MediaFilter);
            }}
          >
            <MenuItem value={MediaFilter.ALL}>All</MenuItem>
            <MenuItem value={MediaFilter.TRACK}>Tracks</MenuItem>
            <MenuItem value={MediaFilter.EPISODE}>Episodes</MenuItem>
          </Select>
          <Button variant="outlined">clear</Button>
        </div>
      </div>
      <div className="media-list">
        {getFilteredList().map((media) => (
          <MediaCard key={media.id} media={media} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
