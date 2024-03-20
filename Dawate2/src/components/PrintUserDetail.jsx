import { useSelector } from "react-redux";
import css from './PrintUserDetail.module.css';

const PrintUserDetail = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className={css.zIndex}>
        <h3 className={css.headingPosition}>Application Accepted</h3>
        <div className={css.divPosition}>
        <div className={css.virticleLine}>
            <p>Student Id: {user.studentId}</p>
            <p>Name: {user.firstName}{" "}{user.lastName}</p>
            <p>Father Name: {user.fatherName}</p>
            <p>Gender: {user.gender}</p>
            <p>Date of Birth: {user.DOB}</p>
            <p>WhatsApp Number: {user.whatsappNumber}</p>
            <p>Mobile Number: {user.mobileNumber}</p>
        </div>
        <div className={css.virticleLine}>
            <p>Password: {user.password}</p>
            <p>Application Status: successful</p>
            <p>Email Id: {user.email}</p>
            <p>State: {user.state}</p>
            <p>City: {user.city}</p>
            <p>Pin Code: {user.pinCode}</p>
            <p>Address: {user.address}</p>
        </div>
        <div>
            <p>Course: {user.course}</p>
            <p>Price: {user.price}</p>
            <p>Duration: {user.duration}</p>
            <p>Language: {user.language}</p>
            <p>Class Time: {user.classTime}</p>
            <p>Profession: {user.profession}</p>
            <p>Contact Time: {user.contactTime}</p>
        </div>
        </div>
        <hr style={{position:'relative', top:'18%'}} />
      </div>
      <div style={{textAlign:"center"}}>
      <button className={css.makeBtn} type="button" onClick={()=>window.print()} >Print</button>
      </div>
    </>
  );
};

export default PrintUserDetail;
