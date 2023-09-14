import { Grid, Typography, Divider } from "@mui/material";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const Portfolio = () => {
  const windowSize = useWindowSize();

  const onBioMimir = () => {
    window.open("https://www.biomimir.ca/", '_blank');
  }

  const onDSAI = () => {
    window.open("https://www.deepsurfaceai.com/", '_blank');
  }

  const onMach32 = () => {
    window.open("https://www.mach32.net/", '_blank');
  }

  const onMindfulGarden = () => {
    window.open("https://mindfulgarden.com/", '_blank');
  }

  const onNanotess = () => {
    window.open("https://nanotess-medical.com/", '_blank');
  }

  const onNimble = () => {
    window.open("https://www.nimblesci.com/", '_blank');
  }

  const onSyantra = () => {
    window.open("https://www.syantra.com/", '_blank');
  }

  const onVoxCell = () => {
    window.open("https://www.voxcellbio.com/", '_blank');
  }

  const desktopLayout = () => {
    return (
      <div id="portfolio">
        <Typography variant="h1" id="portfolio-title">Portfolio</Typography>
        <Divider id="divider"/>
        <Grid container direction="column" id="portfolio-grid">
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onBioMimir} src={"/portfolio/biomimir.png"} alt="biomimir-logo"/>
              </div>
            </Grid>
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onDSAI} src={"/portfolio/dsai.png"} alt="dsai-logo"/>
                <img onClick={onDSAI} src={"/portfolio/dsai-text.png"} alt="dsai-text" id="text-img"/>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onMach32} src={"/portfolio/mach32.png"} alt="mach32-logo"/>
              </div>
            </Grid>
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onMindfulGarden} src={"/portfolio/mindful-garden.png"} alt="mindful-garden-logo"/>
                <img onClick={onMindfulGarden} src={"/portfolio/mindful-garden-text.png"} alt="mindful-garden-text-logo" id="text-img"/>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onNanotess} src={"/portfolio/nanotess.png"} alt="nanotess-logo"/>
                <img onClick={onNanotess} src={"/portfolio/nanotess-text.png"} alt="nanotess-text-logo" id="text-img"/>
              </div>
            </Grid>
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onNimble} src={"/portfolio/nimble.png"} alt="nimble-logo"/>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onSyantra} src={"/portfolio/syantra.png"} alt="syantra-logo"/>
                <img onClick={onSyantra} src={"/portfolio/syantra-text.png"} alt="syantra-text-logo" id="text-img"/>
              </div>
            </Grid>
            <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onVoxCell} src={"/portfolio/voxcell.png"} alt="voxcell-logo"/>
                <img onClick={onVoxCell} src={"/portfolio/voxcell-text.png"} alt="voxcell-text-logo" id="text-img"/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="portfolio">
        <div id="mobile-portfolio">
          <Typography variant="h2" id="portfolio-title">Portfolio</Typography>
          <Divider id="divider"/>
          <Grid container direction="row" id="portfolio-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onBioMimir} src={"/portfolio/biomimir.png"} alt="biomimir-logo"/>
                </div>
              </Grid>
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onDSAI} src={"/portfolio/dsai.png"} alt="dsai-logo"/>
                  <img onClick={onDSAI} src={"/portfolio/dsai-text.png"} alt="dsai-text" id="text-img"/>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onMach32} src={"/portfolio/mach32.png"} alt="mach32-logo"/>
                </div>
              </Grid>
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onMindfulGarden} src={"/portfolio/mindful-garden.png"} alt="mindful-garden-logo"/>
                  <img onClick={onMindfulGarden} src={"/portfolio/mindful-garden-text.png"} alt="mindful-garden-text-logo" id="text-img"/>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onNanotess} src={"/portfolio/nanotess.png"} alt="nanotess-logo"/>
                  <img onClick={onNanotess} src={"/portfolio/nanotess-text.png"} alt="nanotess-text-logo" id="text-img"/>
                </div>
              </Grid>
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onNimble} src={"/portfolio/nimble.png"} alt="nimble-logo"/>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onSyantra} src={"/portfolio/syantra.png"} alt="syantra-logo"/>
                  <img onClick={onSyantra} src={"/portfolio/syantra-text.png"} alt="syantra-text-logo" id="text-img"/>
                </div>
              </Grid>
              <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onVoxCell} src={"/portfolio/voxcell.png"} alt="voxcell-logo"/>
                  <img onClick={onVoxCell} src={"/portfolio/voxcell-text.png"} alt="voxcell-text-logo" id="text-img"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 500 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default Portfolio;
