import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {


  return (
    <div className='search'>
        <MdSearch size="1.3rem" className='search-icon'></MdSearch>
        <input onChange={(event)=> handleSearchNote(event.target.value)}  type='text' className='searchBar' placeholder='Search'>
        </input>
    </div>
  )
}

export default Search