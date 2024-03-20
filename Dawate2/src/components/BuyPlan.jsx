import css from "./BuyPlan.module.css";
import { Form, Link, redirect } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useRef } from "react";
import { Data } from "../store/store";

const BuyPlan = () => {
  const displayCourseName = useSelector((store) => store.courseName);
  const courseList = useSelector(store=>store.courseList);
  const trendingListDB = useSelector(store=> store.trendingList);

  const allCourseList = [...courseList, ...trendingListDB];

  let useList = allCourseList.filter(
    (item) => item.course == displayCourseName.toLowerCase()
  );
  // console.log(useList)
  if (useList.length>1) {
    useList = useList.pop();
  }
  // console.log(useList);

  const dispatch = useDispatch();

  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const fatherNameElement = useRef();
  const DOBElement = useRef();
  const emailElement = useRef();
  const genderElement = useRef();
  const countryElement = useRef();
  const stateElement = useRef();
  const cityElement = useRef();
  const pinCodeElement = useRef();
  const addressElement = useRef();
  const whatsappNumberElement = useRef();
  const mobileNumberElement = useRef();
  const courseElement = useRef();
  const classTimeElement = useRef();
  const professionElement = useRef();
  const contactTimeElement = useRef();
  const languageElement = useRef();
  const mondayElement = useRef();
  const tuesdayElement = useRef();
  const wednesdayElement = useRef();
  const thursdayElement = useRef();
  const fridayElement = useRef();
  const saturdayElement = useRef();
  const sundayElement = useRef();

  const handleFormSubmit = () => {
    const firstName = firstNameElement.current.value;
    const lastName = lastNameElement.current.value;
    const fatherName = fatherNameElement.current.value;
    const DOB = DOBElement.current.value;
    const email = emailElement.current.value;
    const gender = genderElement.current.value;
    const country = countryElement.current.value;
    const state = stateElement.current.value;
    const city = cityElement.current.value;
    const pinCode = pinCodeElement.current.value;
    const address = addressElement.current.value;
    const whatsappNumber = whatsappNumberElement.current.value;
    const mobileNumber = mobileNumberElement.current.value;
    const course = courseElement.current.value;
    const classTime = classTimeElement.current.value;
    const profession = professionElement.current.value;
    const contactTime = contactTimeElement.current.value;
    const language = languageElement.current.value;
    const monday = mondayElement.current.value;
    const tuesday = tuesdayElement.current.value;
    const wednesday = wednesdayElement.current.value;
    const thursday = thursdayElement.current.value;
    const friday = fridayElement.current.value;
    const saturday = saturdayElement.current.value;
    const sunday = sundayElement.current.value;

    dispatch({
      type: "formSubmit",
      payload: {
        formDetail: {
          firstName,
          lastName,
          fatherName,
          DOB,
          email,
          gender,
          country,
          state,
          city,
          pinCode,
          address,
          whatsappNumber,
          mobileNumber,
          course,
          classTime,
          profession,
          contactTime,
          language,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        },
      },
    });
  };

  return (
    <div className={css.formMainContainer}>
      <div className={css.formContainer}>
        {useList.map((obj) => (
          <Form key={obj.course}>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <div>
                  <span className="input-group-text">First and Last Name</span>
                </div>
                <div>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    ref={firstNameElement}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    ref={lastNameElement}
                  />
                </div>
              </div>

              <div className="input-group">
                <span className="input-group-text">Father Name</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  ref={fatherNameElement}
                />
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Date Of Birth</span>
                <input
                  type="Date"
                  aria-label="First name"
                  className="form-control"
                  ref={DOBElement}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Email</span>
                <input
                  type="email"
                  aria-label="First name"
                  className="form-control"
                  ref={emailElement}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Gender</span>
                <select className="form-control" ref={genderElement} id="">
                  <option value="Select">Select</option>
                  <option value="male">Male</option>
                  <option value="femal">Female</option>
                </select>
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Country</span>
                <select className="form-control" ref={countryElement} id="">
                  <option value="Select">Select</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">State</span>
                <select className="form-control" ref={stateElement}>
                  <option value="select">Select</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">City</span>
                <select className="form-control" ref={cityElement} id="">
                  <option value="Select">Select</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="varanasi">Varanasi</option>
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Pin Code</span>
                <input
                  type="tel"
                  aria-label="First name"
                  className="form-control"
                  ref={pinCodeElement}
                />
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Street Address</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  ref={addressElement}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">WhatsApp Number</span>
                <input
                  type="tel"
                  aria-label="First name"
                  className="form-control"
                  ref={whatsappNumberElement}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Mobile Number</span>
                <input
                  type="tel"
                  aria-label="First name"
                  className="form-control"
                  ref={mobileNumberElement}
                />
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group">
                <span className="input-group-text">Course</span>
                <input
                  readOnly
                  type="text"
                  value={obj.course}
                  aria-label="First name"
                  style={{textTransform:"capitalize"}}
                  className="form-control"
                  ref={courseElement}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Class Time</span>
                <select className="form-control" ref={classTimeElement} id="">
                  <option value="Select">Select</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Profession</span>
                <select className="form-control" ref={professionElement} id="">
                  <option value="Select">Select</option>
                  <option value="student">Student</option>
                  <option value="doctor">Doctor</option>
                  <option value="engineer">Engineer</option>
                  <option value="teacher">Teacher</option>
                  <option value="artist">Artist</option>
                  <option value="developer">Developer</option>
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Good Time To Contact</span>
                <select className="form-control" ref={contactTimeElement} id="">
                  <option value="Select">Select</option>
                  <option value="any time">Any Time</option>
                  <option value="day time">Day Time</option>
                  <option value="evening">Evening</option>
                  <option value="week end">Week End</option>
                </select>
              </div>
            </div>
            <div className={css.commonDivFlex}>
              <div className="input-group" style={{ width: "700px" }}>
                <span className="input-group-text">Language</span>
                <select className="form-control" ref={languageElement} id="">
                  <option value="Select">Select</option>
                  <option value="urdu">Urdu</option>
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div
                className="input-group"
                style={{ gap: "20px", display: "flex", alignItems: "center" }}
              >
                <span className="input-group-text">class Day</span>
                <label htmlFor="preference1">
                  <input type="checkbox" id="preference1" ref={mondayElement} />
                  Monday
                </label>

                <label htmlFor="preference2">
                  <input
                    type="checkbox"
                    id="preference2"
                    ref={tuesdayElement}
                  />
                  Tuesday
                </label>

                <label htmlFor="preference3">
                  <input
                    type="checkbox"
                    id="preference3"
                    ref={wednesdayElement}
                  />
                  Wednesday
                </label>
                <label htmlFor="preference3">
                  <input
                    type="checkbox"
                    id="preference3"
                    ref={thursdayElement}
                  />
                  Thursday
                </label>
                <label htmlFor="preference3">
                  <input type="checkbox" id="preference3" ref={fridayElement} />
                  Friday
                </label>
                <label htmlFor="preference3">
                  <input
                    type="checkbox"
                    id="preference3"
                    ref={saturdayElement}
                  />
                  Saturday
                </label>
                <label htmlFor="preference3">
                  <input type="checkbox" id="preference3" ref={sundayElement} />
                  Sunday
                </label>
              </div>
            </div>
            <div className={css.positioningBtn}>
              <Link
                to="/payment detail"
                onClick={handleFormSubmit}
                className={css.nextBtn}
              >
                Next{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </Form>
        ))}
      </div>
    </div>
  );
};

export default BuyPlan;
