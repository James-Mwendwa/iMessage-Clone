import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />

        <div className="sidebar-input">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
        <RateReviewOutlinedIcon />
      </div>

      <div className="sidebar-chat"></div>
    </div>
  );
}

export default Sidebar;
