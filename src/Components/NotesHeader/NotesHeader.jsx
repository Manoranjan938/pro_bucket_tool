import { Button } from '@mui/material'
import React from 'react'

import './NotesHeader.css'

import { FaSearch } from "react-icons/fa";

const NotesHeader = () => {
  return (
    <>
      <div className="notes_header_container">
        <div className="search">
          <div className="search__field">
            <FaSearch className="search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="notes_create_btn">
          <Button variant="contained" color="primary">
            Create New Note
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotesHeader