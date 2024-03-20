import { Link } from "react-router-dom";
import css from "./DCard.module.css";
import { useDispatch } from "react-redux";

const Card = ({displayusers, item}) => {
  let userobj = {
    ...displayusers,
    ...item,
  };

  const dispatch = useDispatch();

  const handlePayment = () => {
    const studentId = Math.round(Math.random() * 10000000000);

    function generatePassword() {
      const length = 8;
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
    <div className={css.MainCardContainer}>
      <div className={css.commonDiv}>
        <div className="input-group" style={{ height: "30px" }}>
          <span className="input-group-text">Card Number</span>
          <input
            type="text"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            placeholder="Format: 1234-1234-1234"
            aria-label="Last name"
            className="form-control"
          />
        </div>
      </div>
      <div className={css.commonDiv}>
        <div className="input-group" style={{ height: "30px" }}>
          <span className="input-group-text">Valid through</span>
          <input type="month" aria-label="Last name" className="form-control" />
        </div>
        <div className="input-group" style={{ height: "30px" }}>
          <span className="input-group-text">CVV</span>
          <input type="tel" aria-label="Last name" className="form-control" />
        </div>
      </div>
      <div className={css.commonDiv}>
        <div className="input-group" style={{ height: "30px" }}>
          <span className="input-group-text">Name</span>
          <input
            type="text"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            placeholder="Enter name on the card"
            aria-label="Last name"
            className="form-control"
          />
        </div>
      </div>
      <div className={css.btnCenter}>
        <Link to="/print Detail" className={css.makeBtn} onClick={handlePayment}>
          PAY
        </Link>
      </div>
    </div>
  );
};

export default Card;
