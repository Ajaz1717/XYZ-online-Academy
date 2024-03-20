import { useDispatch } from "react-redux";
import css from "./UPI.module.css";
import { Link } from "react-router-dom";

const UPI = ({ item, displayusers }) => {
  let userobj = {
    ...displayusers,
    ...item,
  };


  const dispatch = useDispatch();

  const handlePayment = () => {
    const studentId = Math.round(Math.random() * 10000000000);

    function generatePassword() {
      const length = 8;
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let password = "";
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
    
      return password;
    }
    
    const password = generatePassword();
    

    dispatch({
      type: "payClick",
      payload: {
        user: {
          studentId,
          password,
          ...userobj,
        },
      },
    });
  };

  return (
    <div className={css.paymentMethod}>
      <div className="input-group">
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          name="UPI Id"
          placeholder="Enter UPI ID"
        />
        <select className="form-control" name="UPI" id="">
          <option value="@selectAbank">@ select a bank</option>
          <option value="@paytm">@paytm</option>
        </select>
      </div>
      <div className={css.upiNote}>
        You will receive a payment request from GNOA in the UPI app you used to
        create your UPI ID.
      </div>
      <div className={css.btnDiv}>
        <Link className={css.makeBtn} to="/print Detail" onClick={handlePayment}>
          PAY
        </Link>
      </div>
    </div>
  );
};

export default UPI;
