import { Grid, Typography } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import "./styles.css";

const Footer = () => {
  const windowSize = useWindowSize();

  const desktopLayout = () => {
    return (
        <Grid container spacing={1} id="footer" alignItems="center" justifyContent="center">
            <Grid item xs={10}>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#header">Home</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#about-us">About Us</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#portfolio">Portfolio</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#exits">Exits</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#our-team">Our Team</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#giving-back">Giving Back</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#contact-us">Contact Us</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} className="logo">
              <a href="#header">
                <img src={"./adara-logo.png"} alt="company-logo" id="footer-logo"/>
              </a>
            </Grid>
        </Grid>
    );
  }

  const mobileLayout = () => {
    return (
        <Grid container spacing={1} id="mobile-footer" alignItems="center" justifyContent="center">
            <Grid item xs={6}>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#header">Home</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#about-us">About Us</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#portfolio">Portfolio</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#our-team">Our Team</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#giving-back">Giving Back</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#exits">Exits</a>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" id="menu-item">
                        <Typography variant="h6" id="menu-item-text">
                            <a href="#contact-us">Contact Us</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container className="logo" alignItems="center" justifyContent="flex-end">
                    <Grid item>
                        <a href="#header">
                            <img src={"./adara-logo.png"} alt="company-logo" id="footer-logo"/>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }

  return (
    <div className="footer-container">
      {windowSize.width > 800 ? desktopLayout() : mobileLayout()}
    </div>
  );
};

export default Footer;
