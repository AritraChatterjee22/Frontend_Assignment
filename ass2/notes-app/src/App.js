import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import './App.css'
const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes');
      if (response.ok) {
        const data = await response.json();
        setNotes(data.notes);
      } else {
        throw new Error('Error fetching notes');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async (newNote) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      if (response.ok) {
        const data = await response.json();
        setNotes([...notes, data.note]);
      } else {
        throw new Error('Error adding note');
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;

