import React from "react";
import { LuListMusic } from "react-icons/lu";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav>
      <h2 className="logo">
        <LuListMusic /> Playlist Creator
      </h2>
    </nav>
  );
};

export default Topbar;
