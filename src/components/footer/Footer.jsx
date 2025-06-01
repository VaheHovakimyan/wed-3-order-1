import image from "../../images/footer_image.jpg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_main">
      <img
        src={image}
        alt="image"
        width={200}
        height={200}
        className="footer_image"
      />

      <p className="footer_names">
        Էլինա Սարգսյան <br />
        և <br />
        Ալբերտ Ադամյան
      </p>
    </div>
  );
};

export default Footer;
