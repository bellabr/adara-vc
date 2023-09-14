import { Grid, Tooltip, Typography, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const OurTeam = () => {
  const windowSize = useWindowSize();

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.arrow}`]: {
        color: "#ffffff",
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ffffff',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        fontFamily: "Audiowide",
        border: '1px solid #ffffff',
      },
  }));

  const desktopLayout = () => {
    return (
      <div id="our-team">
        <Typography variant="h1" id="our-team-title">Our Team</Typography>
        <Divider id="divider"/>
        <Grid container direction="column" id="our-team-grid">
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Meg Bregazzi (she/her)" arrow>
                  <img src={"./team/meg.png"} alt="meg-bregazzi"/>
                </HtmlTooltip>
              </div>
            </Grid>
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Heather Edwards (she/her)" arrow>
                  <img src={"./team/heather.webp"} alt="heather-edwards"/>
                </HtmlTooltip>
              </div>
            </Grid>
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Victoria Larson (she/her)" arrow>
                  <img src={"./team/vic.jpeg"} alt="victoria-larson"/>
                </HtmlTooltip>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Karen Radford (she/her)" arrow>
                  <img src={"./team/karen.jpeg"} alt="karen-radford"/>
                </HtmlTooltip>
              </div>
            </Grid>
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Jane Snyder (she/her)" arrow>
                  <img src={"./team/jane.jpeg"} alt="jane-snyder"/>
                </HtmlTooltip>
              </div>
            </Grid>
            <Grid item xs={4} id="member-logos">
              <div id="member">
                <HtmlTooltip title="Carol Ann Williams (she/her)" arrow>
                  <img src={"./team/carolann.png"} alt="carol-ann-williams"/>
                </HtmlTooltip>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const mobileLayout = () => {
    return (
      <div id="our-team" style={{height: '315vh'}}>
        <div id="mobile-our-team">
          <Typography variant="h2" id="our-team-title">Our Team</Typography>
          <Divider id="divider"/>
          <Grid container direction="column" id="our-team-grid">
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/meg.png"} alt="meg-bregazzi"/>
                <Typography variant="body2" id="member-name" align="center">Meg Bregazzi <br/> (she/her)</Typography>
              </div>
            </Grid>
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/heather.webp"} alt="heather-edwards"/>
                <Typography variant="body2" id="member-name" align="center">Heather Edwards <br/> (she/her)</Typography>
              </div>
            </Grid>
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/vic.jpeg"} alt="victoria-larson"/>
                <Typography variant="body2" id="member-name" align="center">Victoria Larson <br/> (she/her)</Typography>
              </div>
            </Grid>
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/karen.jpeg"} alt="karen-radford"/>
                <Typography variant="body2" id="member-name" align="center">Karen Radford <br/> (she/her)</Typography>
              </div>
            </Grid>
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/jane.jpeg"} alt="jane-snyder"/>
                <Typography variant="body2" id="member-name" align="center">Jane Snyder <br/> (she/her)</Typography>
              </div>
            </Grid>
            <Grid item id="member-logos">
              <div id="member">
                <img src={"./team/carolann.png"} alt="carol-ann-williams"/>
                <Typography variant="body2" id="member-name" align="center">Carol Ann Williams <br/> (she/her)</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  return (
    <div>{windowSize.width > 700 ? desktopLayout() : mobileLayout()}</div>
  );
};

export default OurTeam;
