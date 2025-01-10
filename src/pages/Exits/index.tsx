import { Divider, Grid, Typography } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import "./styles.css";

const Exits = () => {
  const windowSize = useWindowSize();

  const onSyantra = () => {
    window.open("https://www.syantra.com/", '_blank');
  }

  const desktopLayout = () => {
    return (
      <div id="exits">
        <Typography variant="h1" id="exits-title">Exits</Typography>
        <Divider id="divider"/>
        <Grid container direction="column" id="exits-grid">
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={5} id="exits-logos">
              <div id="exits-logo">
                <img onClick={onSyantra} src={"./exits/syantra.png"} alt="syantra-logo"/>
                <img onClick={onSyantra} src={"./exits/syantra-text.png"} alt="syantra-text-logo" id="text-img"/>
              </div>
            </Grid>
            {/* <Grid item xs={5} id="portfolio-logos">
              <div id="portfolio-logo">
                <img onClick={onVoxCell} src={"./portfolio/voxcell.png"} alt="voxcell-logo"/>
                <img onClick={onVoxCell} src={"./portfolio/voxcell-text.png"} alt="voxcell-text-logo" id="text-img"/>
              </div>
            </Grid> */}
          </Grid>
        </Grid>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="exits" style={{height: '40vh'}}>
        <div id="mobile-exits">
          <Typography variant="h2" id="exits-title">Exits</Typography>
          <Divider id="divider"/>
          <Grid container direction="row" id="exits-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="exits-logos">
                <div id="exits-logo">
                  <img onClick={onSyantra} src={"./exits/syantra.png"} alt="syantra-logo"/>
                  <img onClick={onSyantra} src={"./exits/syantra-text.png"} alt="syantra-text-logo" id="text-img"/>
                </div>
              </Grid>
              {/* <Grid item xs={5} id="portfolio-logos">
                <div id="portfolio-logo">
                  <img onClick={onVoxCell} src={"./portfolio/voxcell.png"} alt="voxcell-logo"/>
                  <img onClick={onVoxCell} src={"./portfolio/voxcell-text.png"} alt="voxcell-text-logo" id="text-img"/>
                </div>
              </Grid> */}
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

export default Exits;
