import React, { useEffect, useState } from 'react'
import Cards from './components/Cards';

export function Content({category,type}) {
    const [movieList, setmovieList] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=> fetchData,[])
    const fetchData = async () => {
      const response = await fetch(`https://vidsrc.to/vapi/${category}/${type}`);
      const result = await response.json();
        setmovieList(result);
        setLoading(false)

      }
      console.log(movieList)
      if (loading) {
        return <div className='justify-center align-middle flex'>Loading...</div>; // Render loading state
      }
      return (
        <div className="relative flex min-h-screen overflow-hidden">
          <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:grid-cols-7 gap-4">
          {!loading &&
          movieList.result.items.map((data,ind)=>(
           <Cards key={ind} imdb_id={data.imdb_id}/>
          ))}
        </div>
        </div>
      )
}