import { useState } from "react";
import css from "./studentTab.module.css";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdQuiz } from "react-icons/md";
import { useSelector } from "react-redux";
import HomeState from "./HomeState";
import Quiz from "./Quiz";
import { RiLiveFill } from "react-icons/ri";

const StudentTab = () => {
  const user = useSelector((store) => store.user);
  const [initalState, setState] = useState("Home");

  // console.log(user)
  return (
    <>
    <div className={css.bcgHide}></div> {/*for hide bcg header*/}
    <div className={css.studentTabMainContainer}>
      <div className={css.sideBarContainer}>
        <div className={css.topDev}>
          <img
            style={{ height: "100px", borderRadius: "50%", marginRight: "10px" }}
            className={css.hide}
            src="images/GNOA-logo.jpg"
            alt="logo"
          />
          <span className={css.hide} style={{marginTop:'15px', position:"relative", right:'6px', fontWeight:'600'}}>GNOA</span>
        </div>
        <div className={css.navLink}>
          <div>
            <div className={initalState === "Home" && css.myActive}>
              <button className={css.mkeBtn} onClick={() => setState("Home")}>
              <span style={{ fontSize: "26px", margin: "0 10px 0 0" }}>
                <IoMdHome />
              </span>
                <span className={css.hide}>Home</span>
              </button>
            </div>

            <div className={initalState === "Quiz" && css.myActive}>
              <button
                className={css.mkeBtn}
                onClick={() => setState("Quiz")}
              >
              <span style={{ fontSize: "26px", margin: "0 10px 0 0" }}>
              <MdQuiz />
              </span>
                <span className={css.hide}>Quiz</span>
              </button>
            </div>
          </div>
        </div>
        <div className={css.navLinkLive}>
          <div style={{borderBottom:'1px solid gray', marginBottom:'10px'}}>
          <span className={css.hide} style={{fontWeight:'600'}}>Live Class</span>
          </div>
        <div className={css.joinHover}>
              <button
                className={css.mkeBtn}
              >
              <span className={css.Apkset} style={{ fontSize: "26px", margin: "0 10px 0 0" }}>
              <RiLiveFill />
              </span>
                <span className={css.hide}>Join</span>
              </button>
            </div>
            </div>
      </div>
      <div className={css.displayContainer}>
        <div className={css.fixdHeader}>
          <div className={css.topDiv}>
            {initalState === "Home" ? (
              <span>Home</span>
            ) : (
              <span>Quiz</span>
            )}
          </div>
          <div className={css.stutentAndOrganizationDiv}>
            <div className={css.studentDetail}>
              <div className={css.img}>
                <img
                  className={css.myPic}
                  src="images/my-pic.jpg"
                  alt="my-pic"
                />
              </div>
              <div className={css.besicDetail}>
                <span>welcome back</span>
                <span style={{ fontWeight: "600" }}>{user.firstName} {user.lastName}</span>
                <span>Student Id: {user.studentId}</span>
              </div>
            </div>
            <div className={css.organizationDetail}>
              <div className={css.organization}>
                <span style={{ margin: "10px" }}>
                  <FaGraduationCap />
                </span>
                <span style={{ fontWeight: "600" }}>Academic Details</span>
              </div>
              <div className={css.cousreName}>
                <span>{user.course} Course (2 March to 3 Aprail)</span>
              </div>
              <div className={css.organizationName}>
                XYZ Online Academy
              </div>
            </div>
          </div>
        </div>
        <div className={css.stateDisplay}>
          {initalState === "Home" ? <HomeState /> : <Quiz/>}
        </div>
      </div>
    </div>
    </>
  );
};

export default StudentTab;
