import { useState } from "react";
import css from "./Quiz.module.css";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineStayCurrentPortrait } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();
  const generateId = useSelector((store) => store.generateId);
  let optionSelected = useSelector((store) => store.optionClicked);
  let score = useSelector(store => store.score);
  const [intClass, setClass] = useState("");

  const arrQuizs = [
    {
      id: 1,
      Q: "Who is the first Education Minister of India ?",
      answers: [
        "Gandhi Ji",
        "Pt Jawahar Lal Nehrue",
        "Maulana Abdul Kalam Azad",
        "None of these",
      ],
      correctAns: "Maulana Abdul Kalam Azad",
    },
    {
      id: 2,
      Q: "who is missile man of India ?",
      answers: [
        "Dr. APJ Abdul Kalam",
        "Vikram Sarabhai",
        "Dr. Homi Bhabha",
        "None of these",
      ],
      correctAns: "Dr. APJ Abdul Kalam",
    },
    {
      id: 3,
      Q: "Who is father of the atomic energy of India ?",
      answers: [
        "Vikram Sarabhai",
        "Dr. Homi Bhabha",
        "Dr. APJ Abdul Kalam",
        "None of these",
      ],
      correctAns: "Dr. Homi Bhabha",
    },
    {
      id: 4,
    },
  ];

  const handleNext = () => {
    setClass("");
    objQuiz.map((item) => {
      if (optionSelected == item.correctAns) {
        dispatch({type: "handleScore"})
      }
    });
    if (generateId < arrQuizs.length && optionSelected) {
      dispatch({ type: "nextClicked" });
    }
  };

  const handlePrevious = () => {
    dispatch({ type: "previousClicked" });
  };

  let objQuiz = arrQuizs.filter((item) => item.id == generateId);

  const handleBtnClick = (event) => {
    setClass("selected");
    dispatch({
      type: "clickOption",
      payload: {
        selectedOption: event.target.innerText,
      },
    });
  };

  return (
    <div className={css.mainStateDevContainer}>
      {objQuiz.map((ques) => (
        generateId == arrQuizs.length ? <h1>Quiz End</h1> :
        <div className={css.quizContainer}>
          <div className={css.question}>
            <p>Q. {ques.Q}</p>
          </div>
          <div className={css.buttonDiv}>
            {ques.answers.map((option) => (
              <button
                className={`${css.mkeBtn} ${css.btnHover} ${
                  option == ques.correctAns && intClass === "selected"
                    ? css.optionClickedActive
                    : undefined
                }`}
                onClick={(event) => handleBtnClick(event)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className={css.controlsDiv}>
            <button
              className={`${css.btnMake} ${css.btnHover}`}
              onClick={handlePrevious}
            >
              <span>
                <FaAnglesLeft />
              </span>
              <span>Previous</span>
            </button>
            <button
              className={`${css.btnMake} ${css.nextBtn}`}
              onClick={handleNext}
            >
              <span>Save & Next</span>
              <span>
                <FaAnglesRight />
              </span>
            </button>
          </div>
        </div> 
      ))}

      <div className={css.lastAndScore}>
        <div className={css.scoreBoard}>
          <p style={{ fontWeight: "600", marginBottom: "30px" }}>
            <span style={{ marginRight: "10px" }}>
              <MdLeaderboard />
            </span>
            Socre Board
          </p>
          <p>
            <span style={{ marginRight: "10px" }}>
              <MdHistory />
            </span>
            Last Score : 23
          </p>
          <p>
            <span style={{ marginRight: "10px" }}>
              <MdOutlineStayCurrentPortrait />
            </span>
            Current Score : {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
