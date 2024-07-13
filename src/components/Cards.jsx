import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function Cards({imdb_id}) {
  const [imdb,setImdb]=useState({});
  const navigate=useNavigate();
  useEffect(()=> fetchData,[imdb_id])
    const fetchData = async () => {
      const response = await fetch(`https://www.omdbapi.com/?&apikey=8935acc4&i=${imdb_id}&plot=full`);
      const newData = await response.json();
      setImdb(newData);
    }
    const playMovie=async()=>{
      const type=imdb.Type=="movie" ? "movie":"tv";
      window.location=`https://vidsrc.to/embed/${type}/${imdb_id}`;
      // navigate("play",{state:{imdb_id}})
    }
    return(
      <>
      {
        imdb.Response!=="False" && imdb.Poster!="N/A" &&
            <div onClick={playMovie} className="group cursor-pointer transition-shadow group-hover:bg-black/80 mb-[-6rem]">
                <div className="bg-gradient-to-t  group-hover:opacity-30">
                <img
                className="rounded-lg h-[240px] w-full group-hover:scale-110 transition-transform duration-500"
                src={`${imdb.Poster}`}
                />
                </div>
                <div className=" opacity-90 group-hover:opacity-100 group-hover:translate-y-[-10.5rem] group-hover:font-serif text-center text-white transition-opacity duration-500 align-bottom justify-between">
                  <span className="font-bold text-md">{imdb.Title}</span>
                  <br/>
                  <span className="invisible group-hover:visible text-yellow-400">
                    {imdb.Type=="movie" ? "MOVIE":"Series"}
                    </span>
                    <br/>
                    {
                      imdb.imdbRating!="N/A" &&
                      <span className="invisible group-hover:border-yellow-500 border px-1 group-hover:visible bg-yellow-500 rounded-2xl text-black text-sm">
                      {"IMDB : "+imdb.imdbRating}
                      <br/>
                    </span>
                    }
                    {
                      imdb.Genre!="N/A" && imdb.Genre!=undefined && 
                        <div className="invisible group-hover:visible border-[0.5px] bg-red-900 px-1 m-0.5 rounded-2xl text-xs inline-flex text-end flex-wrap">
                          <p className="group-hover:border-red-950 text-slate-200 text-sm flex-wrap">{imdb.Genre}</p>
                        </div>
                    }
                  <br/>
                </div>
              </div>
      }
      </>
      )
}