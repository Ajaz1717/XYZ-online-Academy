import css from "./PortalLogin.module.css";
import { MdOutlinePerson } from "react-icons/md";
import { GrKey } from "react-icons/gr";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";

const StudentPortal = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);
  const studentIdElement = useRef();
  const passwordElement = useRef();

  const handleFormSubmit = () => {
    const studentId = studentIdElement.current.value;
    const password = passwordElement.current.value;
    const signObj = {studentId, password}
    if (user.studentId==signObj.studentId && user.password==signObj.password) {
      navigate('/student tab');
    } else {
      alert('User Not Found...');
    }
  }
  
  return (
    <div className={css.mainPortalLoginContainer}>
      <div className={css.portalMinHeading}>
        <h1>Student Portal</h1>
      </div>
      <div className={css.portalContainer}>
        <div className={css.studentInstraction}>
          <h5>
            Students! Who have purchased the course can login here with student
            Roll Number
          </h5>
        </div>
        <div className={css.loginContainer}>
          <h3>Log In</h3>
          <Form>
            <div className={css.inputContainer}>
              <span className={css.personLogo}>
                <MdOutlinePerson />
              </span>
              <span className={css.inputBorder}>
                <input
                ref={studentIdElement}
                  className={css.idAndPassInpute}
                  type="tell"
                  name="student Id"
                  placeholder="Student ID"
                  required
                />
              </span>
            </div>
            <div className={css.passContainer}>
              <span className={css.keyLogo}>
                <GrKey />
              </span>
              <span className={css.inputBorder}>
                <input
                ref={passwordElement}
                  className={css.idAndPassInpute}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </span>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <button className={css.madebtn} onClick={handleFormSubmit}>
                Sign In
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

// export async function handleForm(data, user) {
//   console.log(user)
//   const TformData = await data.request.formData();
//   const myFormData = Object.fromEntries(TformData);
//   // console.log(myFormData);
//   return redirect("/student tab");
// }

export default StudentPortal;
