import { Avatar, AvatarGroup, IconButton, Tooltip } from "@mui/material";
import React from "react";

import { FaSearch } from "react-icons/fa";

import image1 from "Images/avatar1.png";
import image2 from "Images/avatar2.png";
import image3 from "Images/avatar3.png";
import image4 from "Images/avatar4.png";
import image5 from "Images/avatar5.png";

import "./TeamWorkHeader.css";

const TeamWorkHeader = () => {
  return (
    <>
      <div className="team_work_header_container">
        <div className="search_task">
          <div className="search__field">
            <FaSearch className="search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="filter_task">
          <div className="filter_by_asignee">
            <AvatarGroup max={6}>
              <Tooltip title="Remy Sharp">
                <IconButton size="small">
                  <Avatar alt="Remy Sharp" src={image1} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Travis Howard">
                <IconButton size="small">
                  <Avatar alt="Travis Howard" src={image2} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cindy Baker">
                <IconButton size="small">
                  <Avatar alt="Cindy Baker" src={image3} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Agnes Walker">
                <IconButton size="small">
                  <Avatar alt="Agnes Walker" src={image4} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Trevor Henderson">
                <IconButton size="small">
                  <Avatar alt="Trevor Henderson" src={image5} />
                </IconButton>
              </Tooltip>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamWorkHeader;
