import { useContext, useEffect, useState } from "react";
import css from "./Course.module.css";
import SingleCourse from "./SingleCourse";
import { Data } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Course = () => {
  // const {fullCourseList} = useContext(Data);
  const [state, setState] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseList = useSelector((store) => store.courseList);


  useEffect( () => {
    const controller = new AbortController();
    const signal = controller.signal;
      fetch("http://localhost:5000/course", {
    method: "get",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
})
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "onFatch",
        payload: data,
      })
    })
    .catch(error => {
        console.error('Error:', error);
    });


    
      return () => {
        controller.abort();
      }
  }, [state]);

  const handleOnChnage= (event) => {
    let searchValue = event.target.value;
    // console.log(searchValue)

    fetch(`http://localhost:5000/search/${searchValue}`, {
    method: "get",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
})
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "onFatchSearch",
        payload: data,
      })
    })
    .catch(error => {
        console.error('Error:', error);
    });
    if (searchValue=="") {
      setState(!state);
    }
  }

  return (
    <div className={css.mainCourseContainer}>
      <h1 className={css.headinName}>All Courses</h1>
      <div className={css.searchContainer}>
        <div className="input-group" style={{width:'340px'}}>
          <input type="text" aria-label="First name" className="form-control"
          style={{textAlign:'center'}}
          placeholder="Search Courses"
          onChange={(event)=>handleOnChnage(event)}
          />
          <span className="input-group-text"><CiSearch /></span>
        </div>
      </div>
      <div className={css.courseDiv}>
        {courseList.map((item) => (
          <SingleCourse key={item.course} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
