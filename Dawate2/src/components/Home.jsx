import SinglePopularCourseCard from "./SinglePopularCourseCard";
import css from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import { Data } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const {courseList} = useContext(Data);
  // const [list, setList] = useState('');
  const dispatch = useDispatch();
  const trendingListDB = useSelector(store=> store.trendingList)
  console.log(trendingListDB);
  // console.log(courseList)


  useEffect( () => {
    const controller = new AbortController();
    const signal = controller.signal;
      fetch("http://localhost:5000/trendingCourse", {
    method: "get",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
})
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      dispatch({
        type: "onFatchTrending",
        payload: data,
      })
    })
    .catch(error => {
        console.error('Error:', error);
    });


    
      return () => {
        controller.abort();
      }
  }, []);




  return (
    <div className={css.homeContainer}>
      <div className={css.organizationaName}>
        <h2>Welcome to XYZ ONLINE ACADEMY</h2>
      </div>
      <img
        src="https://www.quranteacher.net/public_html/banner_images/islamic_scholor.jpeg"
        alt=""
        width="85%"
        data-bgposition="center top"
        data-bgfit="cover"
        data-bgrepeat="no-repeat"
        className={css.banner}
        data-no-retina=""
      ></img>

      <div className={css.popularContainer}>
        <div className={css.heading}>
            <p>Trending Courses</p>
        </div>
        <div className={css.popularCourseCard}>
          {trendingListDB.map(item => <SinglePopularCourseCard key={item.course} item = {item}></SinglePopularCourseCard>)}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
