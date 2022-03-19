import React, { useEffect,useState } from "react";
import { Navbar } from "./Navbar";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './MoviesDashboard.css';

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data,setData] = useState([]);
  const [list,setList] = useState([]);
  const movieData = () =>{
    axios({
      method: "GET",
      url:"https://movie-fake-server.herokuapp.com/data"
    }).then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  } 



  useEffect(() => {
  movieData()

  },[]);

 

//    filter by genre 

  const handleFilter = (filter_genre) => {
    
    let arr = data.filter((item) => {
      if (item.genre.length > 0) {
        let found=false;
        item.genre.forEach(genre => {
          if (genre == filter_genre) {
            found=true;
          }
        })
        if(found)
        {
          return true;
        }
      }

      return false;
    })
    setList(arr);
    console.log(list);
  
}
  return (
    <>
    <Navbar/>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        <option value="null">Selcet Genre</option>
        {/* {genres.map((e)=>{
         
         { <option value={e}>{e}</option>}
        })} */}
        Comedy
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        <option value="Documentary">Documentary</option>
        <option value="Children">Children</option>
      </select>
      <div className = "movies-list">
       {data.map((e)=>{
         return <>
         <Link to={`/movies/${e.id}`}>
           <div key = {e.id} className="divfor-movies">
             <img src={e.image_url} alt="image" />
             <h4 >{e.movie_name}</h4>
             <p>{e.genre}</p>
             <p>{e.rating}</p>
             <p>{e.release_date}</p>
           </div>
           
           </Link> 
         </>
       })}

      </div>
    </>
  );
};



