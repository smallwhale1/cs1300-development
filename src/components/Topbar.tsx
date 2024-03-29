import React from "react";
import { LuListMusic } from "react-icons/lu";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav>
      <h1 className="logo">
        <LuListMusic /> Playlist Creator
      </h1>
    </nav>
  );
};

export default Topbar;
