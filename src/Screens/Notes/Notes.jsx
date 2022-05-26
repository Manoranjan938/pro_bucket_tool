import NotesList from 'Components/NoteList/NotesList'
import React from 'react'
import Helmet from 'react-helmet'

const Notes = () => {
  return (
    <>
      <Helmet>
        <title>Team Dashboard | Notes</title>
      </Helmet>
      <NotesList />
    </>
  );
}

export default Notes