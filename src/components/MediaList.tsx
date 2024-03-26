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
  const [sortType, setSortType] = useState<string>("");

  const clearFilters = () => {
    setMediaFilter(MediaFilter.ALL);
    setSortType("");
  };

  const getFilteredList = () => {
    if (mediaFilter === MediaFilter.ALL) {
      return mediaList;
    }
    return mediaList.filter((media) => media.type === mediaFilter);
  };

  const getSortedList = (toSort: Media[]) => {
    let sortedList = [...toSort];
    if (sortType === "asc") {
      sortedList = [...toSort].sort((a, b) => {
        if (a.duration < b.duration) return -1;
        else if (b.duration < a.duration) return 1;
        return 0;
      });
    } else if (sortType === "desc") {
      sortedList = [...toSort].sort((a, b) => {
        if (a.duration < b.duration) return 1;
        else if (b.duration < a.duration) return -1;
        return 0;
      });
    }

    return sortedList;
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
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Sort (duration)
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={sortType}
              label="Sort (duration)"
              onChange={(e) => {
                setSortType(e.target.value);
              }}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
          </FormControl>
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
          <Button variant="outlined" onClick={() => clearFilters()}>
            clear
          </Button>
        </div>
      </div>
      <div className="media-list">
        {getSortedList(getFilteredList()).map((media) => (
          <MediaCard key={media.id} media={media} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
