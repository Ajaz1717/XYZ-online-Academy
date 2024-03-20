import css from './Header.module.css';
import {Link} from "react-router-dom";


const Header = () => {
    return <div className={css.navFixd}>
    <center className={css.dua}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quaerat!
      </p>
    </center>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" style={{color: "white", fontSize:'20px'}} aria-current="page" to="/">
          Courses
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/add new">
          Add New
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/delete">
          Delete
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "white", fontSize:'20px'}} className="nav-link" to="/update">
          Update
        </Link>
      </li>
      
    </ul>
      <img style={{float: "right", position:"relative", top:"-49px", right: "20px"}} src="imagesD/logo.png" alt="" />
  </div>
}

export default Header;