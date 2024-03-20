import { useSelector } from "react-redux";
import css from "./userDetailForPaymentCom.module.css";
import { GoPersonFill } from "react-icons/go";

const UserDetail = () => {
    const displayUsers = useSelector(store=>store.users)
  return (
    <div className={css.userDetailContainer}>
      <div>
        <h3>{displayUsers.firstName}{" "}{displayUsers.lastName}</h3>
        <h5>
          <span className={css.textGap}>{displayUsers.mobileNumber}</span>
          <span className={css.textGap}>• &nbsp;&nbsp;{displayUsers.email}</span>
          <span className={css.textGap}>• &nbsp;&nbsp;{displayUsers.state}</span>
        </h5>
      </div>
      <div className={css.personLogo}>
        <GoPersonFill />
      </div>
    </div>
  );
};

export default UserDetail;
