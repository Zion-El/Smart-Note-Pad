import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({id, text, date, time, noteDelete}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <small>{time}</small>
            <MdDeleteForever onClick={()=> noteDelete(id)} className="delete-icon" size='1.3rem' />
        </div>
    </div>
  )
}

export default Note