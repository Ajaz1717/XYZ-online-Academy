import { useState } from "react";
import css from "./AddCourseState.module.css";
import AddCourse from "./AddCourse";
import AddTrendingCourse from "./AddTrendingCourse";

const AddCourseState = () => {
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
      <div>{selectTab == "Course" ? <AddCourse /> : <AddTrendingCourse />}</div>
    </div>
  );
};

export default AddCourseState;
