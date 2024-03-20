import css from "./CourseDetails.module.css";
import { FaCaretRight } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { BsBank2 } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";

const CoursePlan = ({item}) => {
    console.log(item);
  return (
    <div className={css.coursePlanContainer}>
      <center>
        <h1 className={css.coursePlane}>Course Plan</h1>
      </center>
      <div className={css.priceDetailAndFeature}>
        <div>
          <div className={css.mainDetails}>
            <h3 className={css.planName}>{item.course}</h3>
            <div>
              <h2>
                ₹{item.price} for {item.duration} month
              </h2>
              <h4>₹{item.price / item.duration}/month</h4>
            </div>
            <button className={css.buyFullCourseBtn}>Buy Full Course</button>
          </div>
          <div className={css.classFeature}>
            <div className={css.feature}>Features</div>
            <div>
              <p>
                <span>
                  <FaCaretRight />
                </span>
                <span>Single Student (Live) Classes</span>
              </p>
              <p>
                <span>
                  <FaCaretRight />
                </span>
                <span>Time Flexibility</span>
              </p>
              <p>
                <span>
                  <FaCaretRight />
                </span>
                <span>Digital study material (PDF)</span>
              </p>
            </div>
          </div>
        </div>
        <div className={css.paymentMethods}>
          <h3 className={css.headinPaymentMethod}>Payment Methods</h3>
          <h5 className={css.available}>Available:</h5>
          <div className={css.methods}>
            <div className={css.methodGap}>
              <span>
                <SiPaytm />
              </span>
              <span>Paytm</span>
            </div>
            <div className={css.methodGap}>
              <span>
                <FaGooglePay />
              </span>
              <span>Google Pay</span>
            </div>
            <div className={css.methodGap}>
              <span>
                <SiPhonepe />
              </span>
              <span>PhonePe</span>
            </div>
            <div className={css.methodGap}>
              <span>
                <BsBank2 />
              </span>
              <span>Net Banking</span>
            </div>
            <div className={css.methodGap}>
              <span>
                <CiCreditCard1 />
              </span>
              <span>Debit & Credit Card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlan;
