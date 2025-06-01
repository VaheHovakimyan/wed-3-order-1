import welcome_image from "../../images/main_background.jpg";
import Sound from "../sound/Sound.jsx";
import "./Welcome.scss";
import Calendar from "../calendar/Calendar.jsx";

const Welcome = () => {
  return (
    <div className="welcome_main">
      <p className="welcome_text">Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին</p>
      <img
        src={welcome_image}
        alt="image"
        width={200}
        height={200}
        className="welcome_image"
      />
      <Calendar />
      <p className="welcome_names">
        Էլինա Սարգսյան <br />
        և <br />
        Ալբերտ Ադամյան
      </p>
      <Sound />
      <div
        style={{ maxWidth: "450px", textAlign: "center", lineHeight: "105%" }}
      >
        <h3 className="welcome_heading">Սիրելի բարեկամներ և ընկերներ</h3>
        <p className="welcome_paragraph">
          Մենք ուրախ ենք հրավիրել Ձեզ մեր հարսանիքին
          <br />
          Մենք ուրախ ենք մեր կյանքը միավորելու համար և կցանկանայինք սա կիսել Ձեզ
          հետ
        </p>
      </div>

      <div
        className="welcome_month_year"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          maxWidth: "400px",
        }}
      >
        <div
          style={{
            borderTop: "3px black solid",
            borderBottom: "3px black solid",
            padding: "24px",
            lineHeight: "150%",
            fontSize: "17px",
          }}
        >
          Հունիս
        </div>
        <div>28</div>
        <div
          style={{
            borderTop: "3px black solid",
            borderBottom: "3px black solid",
            padding: "19px",
            lineHeight: "150%",
          }}
        >
          2025
        </div>
      </div>
    </div>
  );
};

export default Welcome;
