import axios from 'axios'
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom';
import {Navbar} from './Navbar'

export const SingleMovieDetails = (props) => {
const {id} = useParams();
const [data,setData] = useState();
const movieData = () =>{
  axios({
    method: "GET",
    url:`https://movie-fake-server.herokuapp.com/data/${id}`
  }).then((res)=>setData(res.data))
  .catch((err)=>console.log(err))
} 



  

  useEffect(() => {
 
    movieData();
  },[id]);

  



  return <>
  <Navbar/>
  <div>
    <img src={data.image_url} alt="image"/>
    <h3>title : {data.movie_name}</h3>
    <h6>Genre : {data.genre}</h6>
    <h6>Relase : {data.release_date} </h6>
  </div>
 
  </>;
};
