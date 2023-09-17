import "./styles.css";
import { AppBar, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const windowSize = useWindowSize();
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        if (windowSize.width < 950) {
            setDrawerOpen(false);
        }
    }, [windowSize]);

    const desktopMenu = () => {
        return (
            <Grid container spacing={1} id="header" alignItems="center" justifyContent="center">
                <Grid item xs={4}>
                    <Grid container direction="row" id="logo" alignItems="center" justifyContent="center">
                        <Grid item alignItems="center">
                            <img src={"./adara-logo.png"} alt="company-logo" id="header-logo"/>
                        </Grid>
                        <Grid item>
                            <img src={"./adara-logo-text.png"} alt="company-text" id="header-logo-text"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container justifyContent="flex-end" id="menu-items-container" alignItems="center">
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
                                <a href="#contact-us">Contact Us</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    const mobileMenu = () => {
        return (
            <div id="header">
                <Grid container direction = "row" justifyContent="space-between" alignItems = "center" id="mobile-header">
                    <Grid item xs={3}>
                        <img src={"./adara-logo.png"} alt="company-logo" id="mobile-header-logo"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography id="mobile-header-logo-text" align="center">
                            Adara
                        </Typography>
                    </Grid>
                    <Grid item xs={3} id="hamburger">
                        <IconButton
                            aria-label="open drawer"
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            >
                                {drawerOpen 
                                ? 
                                    <IoMdArrowDropdown id="hamburger-icon" />
                                :
                                    <AiOutlineMenu id="hamburger-icon"/>
                                }   
                        </IconButton>

                    </Grid>
                </Grid>
            </div>
        )
    }

    const dropDownContents = () => {
        return (
            <Grid container spacing={2} direction="column" id="drop-down-menu-content">
                <Grid item xs="auto" id="menu-item">
                    <Typography variant="h6" id="drop-down-menu-item-text">
                        <a href="#about-us" onClick={() => setDrawerOpen(false)}>About Us</a>
                    </Typography>
                </Grid>
                <Grid item xs="auto" id="menu-item">
                    <Typography variant="h6" id="drop-down-menu-item-text">
                        <a href="#portfolio" onClick={() => setDrawerOpen(false)}>Portfolio</a>
                    </Typography>
                </Grid>
                <Grid item xs="auto" id="menu-item">
                    <Typography variant="h6" id="drop-down-menu-item-text">
                        <a href="#our-team" onClick={() => setDrawerOpen(false)}>Our Team</a>
                    </Typography>
                </Grid>
                <Grid item xs="auto" id="menu-item">
                    <Typography variant="h6" id="drop-down-menu-item-text">
                        <a href="#giving-back" onClick={() => setDrawerOpen(false)}>Giving Back</a>
                    </Typography>
                </Grid>
                <Grid item xs="auto" id="menu-item">
                    <Typography variant="h6" id="drop-down-menu-item-text">
                        <a href="#contact-us" onClick={() => setDrawerOpen(false)}>Contact Us</a>
                    </Typography>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        )
    }

    return (
        <div>
            <AppBar position="sticky" className="appBar" elevation={0}>
                {(windowSize.width > 950) 
                    ?
                    <div>
                        {desktopMenu()}
                    </div>
                    :
                    <div>
                        {mobileMenu()}
                    </div>
                }
            </AppBar>
            <Drawer anchor="top" open={drawerOpen}
                onClose={() => setDrawerOpen(false)} id="drop-down-menu">
                {dropDownContents()}
            </Drawer>
        </div>
    )
}

export default Header;