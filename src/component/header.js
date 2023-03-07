import React from 'react'

const Header = ({toggle}) => {
    
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save' onClick={() => toggle(prevDarkMode=>!prevDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header