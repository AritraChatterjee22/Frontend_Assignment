import React from 'react';

const Note = ({ note, deleteNote }) => {
  const handleDeleteNote = () => {
    deleteNote(note.id);
  };

  return (
    <div className="note">
      <div className="note__content">{note.content}</div>
      <div className="note__date">{note.date}</div>
      <button className="note__delete-button" onClick={handleDeleteNote}>
        {/* Delete button icon */}
	  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill="#888" d="M19 6H5L3 8v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2-2zM9 18v-2h6v2H9zm5-12L12 6l-2-2H7v2H5v2h14V6h-4z"/>
          </svg>
      </button>
    </div>
  );
};

export default Note;

