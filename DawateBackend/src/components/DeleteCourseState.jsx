import { useState } from "react";
import css from "./DeleteCourseState.module.css";
import DeleteCourse from "./deleteCourse";
import DeleteTrendingCourse from "./DeleteTrendingCourse";

const DeleteCourseState = () => {
  const [selectTab, setSelectTab] = useState("Courses");
  return (
    <div className={css.mainContainer}>
      <div className={css.stateManage}>
        <button
          className={`${css.btnMake} ${selectTab == "Courses" && css.active}`}
          onClick={() => setSelectTab("Courses")}
        >
          All Courses
        </button>
        <button
          className={`${css.btnMake} ${
            selectTab == "TrendingCourses" && css.active
          }`}
          onClick={() => setSelectTab("TrendingCourses")}
        >
          Trending Courses
        </button>
      </div>
      <div>
        {selectTab=="Courses" ? <DeleteCourse/>: <DeleteTrendingCourse/>}
        
      </div>
    </div>
  );
};

export default DeleteCourseState;
