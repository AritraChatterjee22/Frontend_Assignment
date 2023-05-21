import React, { useState } from 'react';

const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (note.trim() !== '') {
        addNote({
          content: note.trim(),
          date: new Date().toISOString(),
        });
        setNote('');
      }
    }
  };

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="note-input">
      <form>
        <input
          type="text"
          placeholder="Take a note..."
          value={note}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="note-input__input"
        />
      </form>
    </div>
  );
};

export default NoteInput;

