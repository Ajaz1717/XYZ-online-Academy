import { useState } from 'react';
import css from './UpdateCourseState.module.css';
import UpdateCourse from './UpdateCourse';
import UpdateTrendingCourse from './UpdateTrendingCourse';

const UpdateCourseState = () => {
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
        {selectTab=="Courses" ? <UpdateCourse/> : <UpdateTrendingCourse/>}
      </div>
    </div>
  );
}

export default UpdateCourseState;