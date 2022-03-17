import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {About} from '../components/About'
import {Home} from "../components/Home"
import {MoviesDashboard} from "../components/MoviesDashboard"
import {SingleMovieDetails} from "../components/SingleMovieDetails"

export const MainRoutes = ()=>{
    return(
        <>
     
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<MoviesDashboard />} />
      <Route path="/movies/:id" element={<SingleMovieDetails />} />
    </Routes>
  
        </>
    )
}

