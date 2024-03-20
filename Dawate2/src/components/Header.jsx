import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.navFixd}>
      <center className={css.dua}>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iste.
        </p>
      </center>
      <ul className={`nav nav-tabs ${css.flexNavLink}`}>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white", fontSize:'20px'}} aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/Course">
            Course
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/About">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/Contect">
            Contect Us
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/portal login">
            Student<sup style={{color:'gray'}}> Portal</sup>
          </Link>
        </li>
      </ul>
        {/* <img style={{float: "right", position:"relative", top:"-49px", right: "20px"}} src="imagesD/logo.png" alt="" /> */}
    </div>
  );
};

export default Header;
