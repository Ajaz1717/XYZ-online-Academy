import css from "./HomeState.module.css";
import { FaBook } from "react-icons/fa";
import { PiFilePdfFill } from "react-icons/pi";

const HomeState = () => {
  return (
    <div className={css.mainStateDevContainer}>
      <div className={css.syllabusContainer}>
        <div className={css.syllabusHeading}>
          <center>Syllabus</center>
        </div>
        <div className={css.syllabusList}>
          <ul className="list-group">
            <li className="list-group-item" style={{ background: "none" }}>
              An item
            </li>
            <li className="list-group-item" style={{ background: "none" }}>
              A second item
            </li>
            <li className="list-group-item" style={{ background: "none" }}>
              A third item
            </li>
            <li className="list-group-item" style={{ background: "none" }}>
              A fourth item
            </li>
            <li className="list-group-item" style={{ background: "none" }}>
              And a fifth one
            </li>
          </ul>
        </div>
      </div>
      <div className={css.materialAndExamMark}>
        <div className={css.material}>
          <div style={{fontSize:'20px', fontWeight:'600'}}>
            <span style={{marginRight:'10px'}}>
              <FaBook />
            </span>
            <span>Study Material</span>
          </div>
          <a className={css.pdfsty} href="pdf/texting.pdf" download={"CourseSyllabus"}>
            <PiFilePdfFill />
          </a>
        </div>
        <div className={css.mark}>
            <p>Marks</p>
            <p>Examination I : 9</p>
            <p>Examination II : 13</p>
            <p>Examination III : 11</p>
        </div>
      </div>
    </div>
  );
};

export default HomeState;
