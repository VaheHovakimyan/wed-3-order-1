import heart_img from "../../images/heart.svg";
import "./Calendar.scss";

const Calendar = () => {
  return (
    <>
      <p>Հունիս 2025</p>
      <div className="calendar_main">
        <img src={heart_img} className="calendar_heart" alt="calendar_heart" />
      </div>
    </>
  );
};

export default Calendar;
