import { useDispatch, useSelector } from "react-redux";
import css from "./AddCourse.module.css";
import { useRef } from "react";
import {useNavigate} from "react-router-dom"

const AddCourse = () => {
  const navigate = useNavigate()
//   const dispatch = useDispatch();
//   const addQuiz = useSelector((store) => store.addQuiz);
//   console.log(addQuiz)

//   const addMoreQuiz = (event) => {
//     let dummyArr = [""];
//     dummyArr = dummyArr.push(...dummyArr, event.target.innerText)
//     console.log(dummyArr)
//     dispatch({
//       type: "adQuizDiv",
//       payload: ["aj", "ajaz"],
//     });
//   };

const courseElement = useRef();
const priceElement = useRef();
const durationElement = useRef();
const ImageElement = useRef();
const descriptionElement = useRef();

const handleAddCourse = async () =>{
    const course = courseElement.current.value;
    const price = priceElement.current.value;
    const duration = durationElement.current.value;
    const Image = ImageElement.current.value;
    const description = descriptionElement.current.value;

    let obj = {
        course,
        price,
        duration,
        Image,
        description,
    }

    let result = await fetch("http://localhost:5000/addCourse", {
        method:'post',
        body: JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
    // if (result.ok) {
    //     result = await result.json();
    //     console.log(result);
    // } else {
    //     console.error(`HTTP error! Status: ${result.status}`);
    // }

    courseElement.current.value="";
    priceElement.current.value="";
    durationElement.current.value="";
    ImageElement.current.value="";
    descriptionElement.current.value="";

    navigate('/');

}

  return (
    <div className={css.mainAddCourseContainer}>
      <div className={css.commonDivFlex}>
        <div className="input-group">
          <span className="input-group-text">Course Name</span>
          <input ref={courseElement} type="text" aria-label="First name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Price</span>
          <input
            ref={priceElement}
            type="tell"
            aria-label="First name"
            className="form-control"
            placeholder="in rupees"
          />
        </div>
      </div>
      <div className={css.commonDivFlex}>
        <div className="input-group">
          <span className="input-group-text">Duration</span>
          <input ref={durationElement} type="tell" aria-label="First name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Image</span>
          <input
            ref={ImageElement}
            type="text"
            aria-label="First name"
            className="form-control"
          />
        </div>
      </div>
      <div className={css.commonDivFlex}>
        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            ref={descriptionElement}
            type="text"
            aria-label="First name"
            className="form-control"
          />
        </div>
      </div>
      <div className={css.commonDivFlex}>
        <div
          className="input-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span
            className="input-group-text"
            style={{ padding: "10px 30px", fontWeight: "600" }}
          >
            Quiz
          </span>
        </div>
      </div>
      <div className={css.addMore}>
          <div className={css.clone}>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Question</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Answer</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                />
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Options</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  placeholder="option (i)"
                />
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  placeholder="option (ii)"
                />
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  placeholder="option (iii)"
                />
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  placeholder="option (iv)"
                />
              </div>
            </div>
          </div>

        <button className={css.addMoreBtn}>
          add more question
        </button>
      </div>
      <div className={css.commonDivFlex}>
        <div
          className="input-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className={css.btnMake}
          onClick={handleAddCourse}
          >ADD COURSE</button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
