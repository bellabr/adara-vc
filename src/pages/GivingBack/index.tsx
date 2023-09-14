import { Grid, Typography, Divider } from "@mui/material";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const GivingBack = () => {
  const windowSize = useWindowSize();

  const onACHF = () => {
    window.open("https://www.childrenshospital.ab.ca/", '_blank');
  }

  const onCCS = () => {
    window.open("https://cancer.ca/en/", '_blank');
  }

  const onCHF = () => {
    window.open("https://www.calgaryhomeless.com/", '_blank');
  }

  const onCHS = () => {
    window.open("https://www.calgaryhumane.ca/", '_blank');
  }

  const onCWES = () => {
    window.open("https://www.calgarywomensshelter.com/", '_blank');
  }

  const onCC = () => {
    window.open("https://www.contemporarycalgary.com/", '_blank');
  }

  const onHFHF = () => {
    window.open("https://homesforheroesfoundation.ca/", '_blank');
  }

  const onLF = () => {
    window.open("https://lionheartfoundation.ca/", '_blank');
  }

  const onMomentum = () => {
    window.open("https://momentum.org/", '_blank');
  }

  const onPFP = () => {
    window.open("https://www.parachutesforpets.com/", '_blank');
  }

  const onYWCA = () => {
    window.open("https://www.ywcalgary.ca/", '_blank');
  }

  const desktopLayout = () => {
    return (
      <div id="giving-back">
        <Typography variant="h1" id="giving-back-title">Giving Back</Typography>
        <Divider id="divider"/>
        <Grid container direction="column" id="giving-back-grid">
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={4} id="giving-back-logos">
              <div id="giving-back-logo">
                <img onClick={onACHF} src={"./givingback/achf.png"} alt="achf-logo"/>
              </div>
            </Grid>
            <Grid item xs={4} id="giving-back-logos">
              <div id="giving-back-logo">
                <img onClick={onCHF} src={"./givingback/chf.png"} alt="chf-logo"/>
              </div>
            </Grid>
            <Grid item xs={4} id="giving-back-logos">
              <div id="giving-back-logo">
                <img onClick={onCHS} src={"./givingback/chs.png"} alt="chs-logo"/>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="column" id="giving-back-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onCWES} src={"./givingback/cwes.png"} alt="cwes-logo"/>
                </div>
              </Grid>
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onCCS} src={"./givingback/ccs.png"} alt="ccs-logo"/>
                </div>
              </Grid>
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onCC} src={"./givingback/cc.png"} alt="cc-logo"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" id="giving-back-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onHFHF} src={"./givingback/hfhf.png"} alt="hfhf-logo"/>
                </div>
              </Grid>
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onLF} src={"./givingback/lf.png"} alt="lf-logo"/>
                </div>
              </Grid>
              <Grid item xs={4} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onMomentum} src={"./givingback/momentum.png"} alt="momentum-logo"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" id="giving-back-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onPFP} src={"./givingback/pfp.png"} alt="pfp-logo"/>
                </div>
              </Grid>
              <Grid item xs={5} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onYWCA} src={"./givingback/ywca.png"} alt="ywca-logo"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="giving-back" style={{height: '145vh'}}>
        <div id="mobile-giving-back">
          <Typography variant="h2" id="giving-back-title">Giving Back</Typography>
          <Divider id="divider"/>
          <Grid container direction="column" id="giving-back-grid">
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={6} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onACHF} src={"./givingback/achf.png"} alt="achf-logo"/>
                </div>
              </Grid>
              <Grid item xs={6} id="giving-back-logos">
                <div id="giving-back-logo">
                  <img onClick={onCHF} src={"./givingback/chf.png"} alt="chf-logo"/>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="column" id="giving-back-grid">
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onCHS} src={"./givingback/chs.png"} alt="chs-logo"/>
                  </div>
                </Grid>
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onCWES} src={"./givingback/cwes.png"} alt="cwes-logo"/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" id="giving-back-grid">
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onCCS} src={"./givingback/ccs.png"} alt="ccs-logo"/>
                  </div>
                </Grid>
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onCC} src={"./givingback/cc.png"} alt="cc-logo"/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" id="giving-back-grid">
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onHFHF} src={"./givingback/hfhf.png"} alt="hfhf-logo"/>
                  </div>
                </Grid>
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onLF} src={"./givingback/lf.png"} alt="lf-logo"/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" id="giving-back-grid">
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onMomentum} src={"./givingback/momentum.png"} alt="momentum-logo"/>
                  </div>
                </Grid>
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onPFP} src={"./givingback/pfp.png"} alt="pfp-logo"/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" id="giving-back-grid">
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} id="giving-back-logos">
                  <div id="giving-back-logo">
                    <img onClick={onYWCA} src={"./givingback/ywca.png"} alt="ywca-logo"/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 900 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default GivingBack;
