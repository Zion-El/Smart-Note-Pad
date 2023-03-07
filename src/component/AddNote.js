import React from 'react'
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
  const [text, setText] = useState('')
  const character_limit = 200

  const handleValueChange =(event)=>{
    if (character_limit - event.target.value.length >=0){
        setText(event.target.value)
    }
  };

  const handleSaveNote = () => {
    if (text.trim().length > 0 ){
      handleAddNote(text)
      setText('')
    }
    
  };

  return (
    <div className='note new'>
        <textarea className='new-input' onChange={handleValueChange} rows='8' cols='10' value={text} placeholder='Type to add a note....'></textarea>
        <div className='note-footer'>
            <small className='note-footer'>{character_limit-text.length} remaining</small>
            <button onClick={handleSaveNote} className='save'>Save</button>
        </div>
    </div>
  )
}

export default AddNote