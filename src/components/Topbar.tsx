import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav>
      <h2 className="logo">
        <FaRegCirclePlay /> Playlist Creator
      </h2>
    </nav>
  );
};

export default Topbar;
