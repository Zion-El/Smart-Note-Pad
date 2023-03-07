// import Counter from './component/counter';
// import CounterUseState from './component/counterUseState';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './component/noteList';
import Search from './component/search';
import  Header  from './component/header';




const App = () => {  

  const [note, setNotes] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [searchText, setSearchText] = useState('')

  // ADDING N0TES OT THE PAD
  const addNote = (text) =>{
    const date = new Date();
    const new_note = {
      id:nanoid(),
      text: text,
      date:date.toLocaleDateString(),
      time:date.toLocaleTimeString()
    }
    const updated_notes = [...note, new_note]
    const text_note = updated_notes
    setNotes(text_note)
  }

  // DELETING NOTES FROM THE BAD
  const deleteNote=(id)=>{
    const newNotes = note.filter((note)=>note.id !== id)
    const text_note = newNotes
    setNotes(text_note)
  }

  // CAUSING SIDE EFFECTS TO SAVE AND RETRIEVE FROM LOCAL STORAGE
  useEffect(()=>{
    localStorage.setItem('note-app-data', JSON.stringify(note));
  }, [note])

  useEffect(()=>
    {const savedNote = JSON.parse(localStorage.getItem('note-app-data'));
    if(savedNote){
      setNotes(savedNote);
    };
  },
  []);




  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="App container">
      {/* <Counter/> */}
      {/* <CounterUseState/> */}
        <Header toggle={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes = {note.filter((note)=>note.text.toLowerCase().includes(searchText))} handleSaveNote ={addNote} handleDeleteNote = {deleteNote}/>
      </div>
    </div>
  );
}

export default App;
