import css from "./CourseDetails.module.css";
import { MdLiveTv } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaBook } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { BsBank2 } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const CourseDetails = () => {
  let displayCourseName = useSelector(store => store.courseName);
  displayCourseName= displayCourseName.toLowerCase();
  const courseListDB = useSelector(store=> store.courseList);
  const trendingListDB = useSelector(store=> store.trendingList);
  
  const allCourseList = [...trendingListDB, ...courseListDB];

  // console.log(allCourseList)

  let useList = allCourseList.filter(item => item.course == displayCourseName);
  // if (useList.length>1) {
  //   useList = useList.pop();
  //   console.log(typeof useList)
  // }

  return (
    <>
    {useList.map(item => 
      <div className={css.mainCourseContainer} key={item.course}>
      <div className={css.courseContainer}>
        <div className={css.courseAbout}>
          <h1 className={css.nameCourse}>{item.course}</h1>
          <br />
          <div className={css.studyMethod}>
            <div className={css.iconAlign}>
              <span className={css.iconResize}>
                <MdLiveTv />
              </span>
              <span>Live Intractive Classes</span>
            </div>
            <div className={css.iconAlign}>
              <span className={css.iconResize}>
                <SlEnergy />
              </span>
              <span>Full Syllabus Course</span>
            </div>
            <div className={css.iconAlign}>
              <span className={css.iconResize}>
                <FaBook />
              </span>
              <span>Study Material PDF</span>
            </div>
          </div>
          <div className={css.language}>
            <span>Language: </span>
            <span className={css.urdu}>Urdu</span>
          </div>
          <div>
            <button className={css.courseDetailButton}>
              View Course Plans
            </button>
          </div>
        </div>
        <div className={css.courseBanner}>
          <img
            src= {item.Image}
            alt="error"
            width="100%"
          />
        </div>
      </div>
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
      <div className={css.coursePlanContainer}>
        <center>
          <h1 className={css.coursePlane}>Course Plan</h1>
        </center>
        <div className={css.priceDetailAndFeature}>
        <div className={css.courseDetailDiv}>
          <div className={css.mainDetails}>
            <h3 className={css.planName}>{item.course}</h3>
            <div>
              <h2>₹{item.price} for {item.duration} month</h2>
              <h4 className={css.planPerMonth}>₹{item.price/item.duration}/month</h4>
            </div>
            <Link to="/buy course plan" className={css.buyFullCourseBtn}>Buy Full Course</Link>
          </div>
          <div className={css.classFeature}>
            <div className={css.feature}>Features</div>
            <div>
              <p><span><FaCaretRight /></span><span>Single Student (Live) Classes</span></p>
              <p><span><FaCaretRight /></span><span>Time Flexibility</span></p>
              <p><span><FaCaretRight /></span><span>Digital study material (PDF)</span></p>
            </div>
          </div>
        </div>
        <div className={css.paymentMethods}>
          <h3 className={css.headinPaymentMethod}>Payment Methods</h3>
          <h5 className={css.available}>Available:</h5>
          <div className={css.methods}>
          <div className={css.methodGap}>
            <span><SiPaytm /></span><span>Paytm</span>
          </div>
          <div className={css.methodGap}>
            <span><FaGooglePay /></span><span>Google Pay</span>
          </div>
          <div className={css.methodGap}>
            <span><SiPhonepe /></span><span>PhonePe</span>
          </div>
          <div className={css.methodGap}>
            <span><BsBank2 /></span><span>Net Banking</span>
          </div>
          <div className={css.methodGap}>
            <span><CiCreditCard1 /></span><span >Debit & Credit Card</span>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div className={css.ourResultContainer}>
        <h3>Our Result:</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae facere repellendus architecto odio consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi doloremque, quas quaerat voluptate temporibus tempora itaque reprehenderit! Consectetur, maxime reiciendis?</p>
      </div>
    </div>
      )}
    
    </>
  );
};

export default CourseDetails;
