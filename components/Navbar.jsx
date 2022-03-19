import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './Navbar.css';
const links = [
  {
    title: "Home",
    link: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id : "header-link-about",
  },{
    title: "Movies",
    link: "/movies",
    id : "header-link-movies",
  },
];
export const Navbar = () => {
  return(
    <>
     <div className="navbar-div">
             {links.map((user,index) => (
        <Link to={user.link} key={index}>{user.title}</Link>
      ))}
    </div>
    </>
  )
};
