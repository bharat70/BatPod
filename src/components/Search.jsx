import React from 'react'
import { useLocation } from 'react-router-dom';
import Cards from './Cards';

const Search =() => {
  const location=useLocation();
  return (
    <>
  <div className="relative flex min-h-screen overflow-hidden">
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {
      location.state.data.Search.map((data,ind)=>(
       <Cards key={ind} imdb_id={data.imdbID}/>
      ))
      }
    </div>
    </div>
    </>
  )
}
export default Search;