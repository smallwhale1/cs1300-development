import React, { useState } from "react";
import { Media } from "../data/media";
import MediaCard from "./MediaCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

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
  const [mediaGenreFilter, setMediaGenreFilter] = useState("all");
  const [sortType, setSortType] = useState<string>("none");

  const clearFilters = () => {
    setMediaFilter(MediaFilter.ALL);
    setMediaGenreFilter("all");
    setSortType("none");
  };

  const getFilteredList = () => {
    let filteredList = [...mediaList];
    if (mediaFilter !== MediaFilter.ALL) {
      filteredList = filteredList.filter((media) => media.type === mediaFilter);
    }
    if (mediaGenreFilter !== "all") {
      filteredList = filteredList.filter(
        (media) => media.genre === mediaGenreFilter
      );
    }

    return filteredList;
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
        {/* Duration */}
        <div className="media-filters">
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel
              id="demo-simple-select-helper-label"
              htmlFor={"input-sort"}
            >
              Sort (duration)
            </InputLabel>
            <Select
              inputProps={{ id: "input-sort" }}
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
          {/* Genre */}
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel
              id="demo-simple-select-helper-label-genre"
              htmlFor={"input-genre"}
            >
              Genre
            </InputLabel>
            <Select
              inputProps={{ id: "input-genre" }}
              labelId="demo-simple-select-helper-label-genre"
              id="demo-simple-select-helper-genre"
              value={mediaGenreFilter}
              label="Genre"
              onChange={(e) => {
                setMediaGenreFilter(e.target.value);
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="pop">Pop</MenuItem>
              <MenuItem value="classical">Classical</MenuItem>
              <MenuItem value="news">News</MenuItem>
              <MenuItem value="tech">Tech</MenuItem>
            </Select>
          </FormControl>
          {/* Media Type */}
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel
              id="demo-simple-select-helper-label-media"
              htmlFor={"input-media"}
            >
              Media
            </InputLabel>
            <Select
              inputProps={{ id: "input-media" }}
              labelId="demo-simple-select-helper-label-media"
              id="demo-simple-select-helper-media"
              value={mediaFilter}
              label="Media"
              onChange={(e) => {
                setMediaFilter(e.target.value as MediaFilter);
              }}
            >
              <MenuItem value={MediaFilter.ALL}>All</MenuItem>
              <MenuItem value={MediaFilter.TRACK}>Tracks</MenuItem>
              <MenuItem value={MediaFilter.EPISODE}>Episodes</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={() => clearFilters()}>
            reset
          </Button>
        </div>
      </div>
      <div className="media-list">
        {getSortedList(getFilteredList()).length > 0 ? (
          getSortedList(getFilteredList()).map((media) => (
            <MediaCard key={media.id} media={media} toggleLike={toggleLike} />
          ))
        ) : (
          <p>No Results</p>
        )}
      </div>
    </div>
  );
};

export default MediaList;
