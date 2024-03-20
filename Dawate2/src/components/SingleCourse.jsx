import { Link } from "react-router-dom";
import css from "./SingleCourse.module.css";
import {useDispatch} from "react-redux";

const SingleCourse = ({ item }) => {
  const dispatch = useDispatch();

  const handleName = (event) => {
    dispatch({
      type: "courseClick",
      payload: {
        name: event.target.innerText,
      },
    });
  };
  return (
    <div className={css.singleCourse}>
      <img src={item.Image} alt="" className={css.imgStyle} />
      <div className={css.courseName}>
        <h3>{item.course} course</h3>
      </div>
      <p className={css.courseDiscription}>{item.description}</p>
      <Link to="/course details" className={css.btnStyle} onClick={(event)=> handleName(event)}> 
        {item.course}
      </Link>
    </div>
  );
};

export default SingleCourse;
