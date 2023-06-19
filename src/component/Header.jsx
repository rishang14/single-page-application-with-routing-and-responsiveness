import { Outlet,Link } from "react-router-dom";
import "../styles/header.scss";
const Header = () => {
  return ( 
    <>
    <nav>
      <h1>TechStar.</h1>
      <main> 
        <a href={"/#home"}>Home</a>
        <Link to={"/contact"}>Contact</Link>
        <a href={"/#about"}>About</a>
        <Link to={"/#brands"}>Brands</Link>
        <Link to={"/services"}>Services</Link>
      </main> 
    </nav> 
      <Outlet/>
      </>
    
  );
};
export default Header;
