import React from 'react'
import { useLocation } from 'react-router-dom'

const PlayMovie = () => {
    const location=useLocation();
  return (
    <div>
        {
            location.state.imdb_id
        }
        {/* <video controls width="600" height="400">
            <source type='video/mp4' src={`https://vidsrc.to/embed/movie/${location.state.imdb_id}`}></source>
        </video> */}
    </div>
  )
}

export default PlayMovie