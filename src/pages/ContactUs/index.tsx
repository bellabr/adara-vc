import { Typography, Divider } from "@mui/material";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const ContactUs = () => {
  const windowSize = useWindowSize();

  const onLinkedin = () => {
    window.open("https://www.linkedin.com/company/adara-venture-capital/", '_blank');
  }

  const desktopLayout = () => {
    return (
      <div id="contact-us">
        <Typography variant="h1" id="contact-us-title">Contact Us</Typography>
        <Divider id="divider"/>
        <div id="et">
          <img onClick={onLinkedin} src={"./contact-us.png"} alt="contact-us-logo"/>
        </div>
        <Typography variant="h4" id="linkedin">LinkedIn</Typography>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="contact-us" style={{height: '50vh'}}>
        <div id="mobile-contact-us">
          <Typography variant="h2" id="contact-us-title">Contact Us</Typography>
          <Divider id="divider"/>
          <div id="et">
            <img onClick={onLinkedin} src={"./contact-us.png"} alt="contact-us-logo"/>
          </div>
          <Typography onClick={onLinkedin} variant="h4" id="linkedin">LinkedIn</Typography>
        </div>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 500 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default ContactUs;
