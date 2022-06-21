import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import { IconButton } from "@mui/material";
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar className="sidebar-avatar" />

        <div className="sidebar-input">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>

        <IconButton variant="outlined" className="sidebar-inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar-chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      
      </div>
    </div>
  );
}

export default Sidebar;
