import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NoteList = ({ notes, handleSaveNote, handleDeleteNote}) => {
  return (
    <div className='note-list'>
        {notes.map((note)=> <Note key={note.id} id={note.id} noteDelete={handleDeleteNote} text={note.text} date={note.date} time={note.time}/>)}
        <AddNote handleAddNote={handleSaveNote}/>
    </div>
    
  )
}

export default NoteList