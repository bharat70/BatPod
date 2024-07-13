import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
function Header() {
  const [values,setValue]=useState("");
  const navigate = useNavigate();
    const handleInputChange = (event) => {
      setValue(event.target.value);
    }
  const searchMovie=()=>{
        console.log(values);
        fetch(`https://www.omdbapi.com/?&apikey=8935acc4&s=${values}&plot=full`).then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          navigate("search",{state:{data}})
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });

  };
  return (
    <div className="max-w-sm mx-auto m-4">
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-200" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text"
            value={values}
            onChange={handleInputChange}
             className="bg-black w-full p-3 ps-10 text-sm border border-slate-500 text-pretty text-white rounded-3xl" placeholder="Search Movies, Series..." required />
            <button type="submit" onClick={()=>searchMovie()}
            className="text-slate-400 absolute end-2 hover:bg-slate-700 hover:text-white bottom-[0.45rem] border border-slate-600 font-medium rounded-3xl text-sm px-2.5 py-1.5">Search</button>
        </div>
    </div>
  )
}

export default Header