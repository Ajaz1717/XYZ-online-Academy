import { useRef } from "react";
import css from "./deleteCourse.module.css";
import { useNavigate } from "react-router-dom";

const DeleteCourse = () => {
    const navigate = useNavigate();
    const courseElement = useRef();

    const handleDltCourse = async () => {
        let course = courseElement.current.value;
        let result = await fetch(`http://localhost:5000/delete/${course}`,{
            method:"Delete"
        });
        result = await result.json();

        courseElement.current.value = "";
        navigate('/')
        
    }

  return (
    <div className={css.mainDltCourseContainer}>
      <div className={css.commonDivFlex}>
        <div className="input-group">
          <span className="input-group-text">Course Name</span>
          <input
            ref={courseElement} type="text"
            aria-label="First name"
            className="form-control"
          />
        </div>
      </div>
      <button className={css.btnMake}
          onClick={handleDltCourse}
          >DELETE COURSE</button>
    </div>
  );
};

export default DeleteCourse;
