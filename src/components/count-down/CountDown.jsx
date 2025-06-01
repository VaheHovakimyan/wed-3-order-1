import "./CountDown.scss";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="time_countdown">
      <div className="time_countdown_item">
        <span className="time_value">{pad(days)}</span>
        <span className="time_name">օր</span>
      </div>

      <div className="time_countdown_item">
        <span className="time_value">{pad(hours)}</span>
        <span className="time_name">ժամ</span>
      </div>

      <div className="time_countdown_item">
        <span className="time_value">{pad(minutes)}</span>
        <span className="time_name">րոպե</span>
      </div>

      <div className="time_countdown_item">
        <span className="time_value">{pad(seconds)}</span>
        <span className="time_name">վայրկյան</span>
      </div>
    </div>
  );
};

const CountDown = () => {
  return (
    <div className="countdown_main">
      <div className="countdown_main_opacity">
        <h2 className="countdown_title">Մնացել է հարսանիքի օրվան...</h2>
        <Countdown
          date={new Date("June 28, 2025 12:00:00").getTime()}
          renderer={renderer}
        />
      </div>
    </div>
  );
};

export default CountDown;
