import { useState } from 'react';
import css from './CourseState.module.css';
import Courses from './Courses';
import TrendingCourse from './TrendingCourse';

const CourseState = () => {
    const [selectTab, setSelectTab] = useState("Courses")
    return <div className={css.mainContainer}>
        <div className={css.stateManage}>
            <button className={`${css.btnMake} ${selectTab=="Courses" && css.active}`} onClick={()=>setSelectTab("Courses")}>All Courses</button>
            <button className={`${css.btnMake} ${selectTab=="TrendingCourses" && css.active}`} onClick={()=>setSelectTab("TrendingCourses")}>Trending Courses</button>
        </div>
        <div className={css.state}>
            {selectTab=="Courses" ? <Courses/> : <TrendingCourse/>}
            
            
        </div>
    </div>
}

export default CourseState;