import css from "./PaymentDetail.module.css";
import UPI from "./UPI";
import { useState } from "react";
import Card from "./DCard";
import UserDetail from "./userDetailForPaymentCom";
import { useSelector } from "react-redux";

const PaymentDetail = () => {
  const [selectedTab, setSelectedTab] = useState("UPI");

  // const displayCourseName = useSelector((_sotre) => _sotre.courseName)
  const displayusers = useSelector((_sotre) => _sotre.users);
  const courseList = useSelector(store=>store.courseList);
  const trendingListDB = useSelector(store=> store.trendingList);

  const allCourseList = [...courseList, ...trendingListDB];

  const useList = allCourseList.filter(
    (item) => item.course == displayusers.course
  );
  // const useListObj =

  return (
    <>
      {useList.map((item) => (
        <div className={css.PaymentDetailMainContainer} key={item.course}>
          <div className={css.userAndPaymentMethodContainer}>
            <UserDetail></UserDetail>
            <div className={css.paymentMethodContainer}>
              <div className={css.paymentMethodList}>
                <button
                  onClick={() => setSelectedTab("UPI")}
                  className={css.btnSytle}
                >
                  UPI
                </button>
                <button
                  onClick={() => setSelectedTab("card")}
                  className={css.btnSytle}
                >
                  Debit / Credit Card
                </button>
              </div>
              <>
                {selectedTab === "UPI" ? (
                  <UPI displayusers={displayusers} item={item}/>
                ) : (
                  <Card displayusers={displayusers} item={item}/>
                )}
              </>
            </div>
          </div>

          <div className={css.PaymentDetailContainer}>
            <div className={css.courseDetail}>
              <h3>{item.course} Course</h3>
              <h5>{item.duration} months</h5>
              <h5>Valid for {item.duration} months</h5>
            </div>
            <div className={css.paymentDetail}>
              <div className={css.courseFee}>
                <span>Course Fee</span>
                <span>₹{item.price}</span>
              </div>
              <div className={css.totalFee}>
                <span>
                  <span className={css.totalAndFee}>Total</span>
                  <span className={css.inclText}>(Incl. of all taxes)</span>
                </span>
                <span className={css.totalAndFee}>₹{item.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PaymentDetail;
