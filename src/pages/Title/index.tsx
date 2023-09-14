import { Typography } from "@mui/material";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const Title = () => {
  const windowSize = useWindowSize();

  const desktopLayout = () => {
    return (
      <div id="title-container">
        <Typography id="title-text" variant="h1" align="center">Meaningful investments in the future of life sciences</Typography>
        <img src={"./adara-logo.png"} alt="company-logo" id="header-logo"/>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="mobile-title-container">
        <Typography id="mobile-title-text" variant="h2" align="center">Meaningful investments in the future of life sciences</Typography>
        <img src={"./adara-logo.png"} alt="company-logo" id="header-logo"/>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 700 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default Title;