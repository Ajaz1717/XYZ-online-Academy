import { useEffect } from "react";
import css from "./Courses.module.css";
import { useDispatch, useSelector } from "react-redux";

const Course = () => {
  const dispatch = useDispatch();
  const courseList = useSelector((store) => store.courseList);
  // console.log(courseList);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:5000/course", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "onFatch",
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.mainListContainer}>
      {" "}
      <ul className="list-group">
      <li className="list-group-item" style={{display:"flex", justifyContent:'space-around', backgroundColor:'gray', padding:'15px 0', fontWeight:'600'}}>
        {/* <span>Sr. No</span> */}
        <span>Course Name</span>
        <span>Course Price</span>
        <span>Course Duration</span>
      </li>
        {courseList.map((item) => (
          <li className="list-group-item" style={{display:"flex", justifyContent:'space-around'}}>
            <span className={css.listItemGap}>{item.course}</span>
            <span className={css.listItemGap}>₹ {item.price}</span>
            <span className={css.listItemGap}>{item.duration} Month</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
