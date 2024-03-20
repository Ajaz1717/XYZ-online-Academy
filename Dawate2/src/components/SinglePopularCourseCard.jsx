import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import css from './SinglePopularCourse.module.css';

const SinglePopularCourseCard = ({ item }) => {
const dispatch = useDispatch();


  const handleName = (event) => {
    dispatch({
      type: "cardClick",
      payload: {
        name: event.target.innerText,
      }
    })
  }

  return (
    <div
      className={css.cardContainer}
      style={{
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{item.course}</h5>
        <p className="card-text">Find full details about course...</p>
        <Link
          to="/course details"
          className={css.btnstyle}
          onClick={(event)=>handleName(event)}
        >
          {item.course}
        </Link>
      </div>
    </div>
  );
};
export default SinglePopularCourseCard;
