import React from "react";

import './NotesList.css'

import {BsThreeDots} from 'react-icons/bs'
import NotesHeader from "Components/NotesHeader/NotesHeader";

const NotesList = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <>
      <div className="notes_container">
        <NotesHeader />
        <div className="divider" />
        <div className="notes__cards">
          <div className="notes__card">
            <div className="notes_title">
              <h2>Doing Something</h2>
              <span>
                <BsThreeDots />
              </span>
            </div>
            <div className="notes__description">
              <span>
                {truncate(
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                  30
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesList;
