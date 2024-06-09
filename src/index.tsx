import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const THEME = createTheme({
  typography: {
    fontFamily: `"Audiowave", sans-serif`,
    h1: {
      fontSize: 50,
      fontWeight: 500,
      color: "#363636",
    },
    h2: {
      fontSize: 45,
      fontWeight: 500,
      color: "#363636",
      "@media (max-width: 500px)": {
        fontSize: 35,
        fontWeight: 500,
      },
    },
    h3: {
      fontSize: 30,
      fontWeight: 700,
      color: "#363636",
    },
    h4: {
      fontSize: 30,
      fontWeight: 500,
      color: "#363636",
      "@media (max-width: 500px)": {
        fontSize: 22,
        fontWeight: 500,
      },
    },
    h5: {
      fontSize: 22,
      fontWeight: 700,
      color: "#363636",
    },
    h6: {
      fontSize: 17,
      fontWeight: 700,
      color: "#363636",
    },
    body1: {
      fontSize: 28,
      fontWeight: 400,
      color: "#363636",
    },
    body2: {
      fontSize: 22,
      fontWeight: 400,
      color: "#363636",
    },
    button: {
      fontSize: 17,
      fontWeight: 700,
    },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  // overrides: {
  //   MuiButton: {
  //     outlined: {
  //       borderRadius: 69,
  //       color: "black",
  //       backgroundColor: "white",
  //       textTransform: "unset",
  //       borderColor: "black",
  //       boxShadow: "0 0 2px black",
  //       width: "187px !important",
  //       height: "62px",
  //     },
  //     contained: {
  //       borderRadius: 69,
  //       color: "white",
  //       backgroundColor: "black",
  //       textTransform: "unset",
  //       width: 120,
  //     },
  //   },
  //   MuiInputBase: {
  //     input: {
  //       fontSize: 17,
  //       fontWeight: 400,
  //     },
  //     root: {
  //       fieldset: {
  //         borderRadius: 40,
  //         borderColor: "black",
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       fieldset: {
  //         borderRadius: "20px",
  //         borderColor: "black",
  //       },
  //     },
  //   },
  // },
  palette: {
    "primary": {
      "main": "#6ba3bd",
    },

// #6ba3bd
// #93d4eb
// #0c242c
// #6094a5
// #73adbe
// #2d4c5c
// #93d4ec
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={THEME}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Adara Venture Capital." />
        <meta property="og:title" content="Adara VC" />
        <meta name="google-site-verification" content="dRNTvgu3heqMp1ofbVH4vlTppDYOPtyql7SK9lwZnXY" />
        <div> <Header/> <Home/> <Footer/> </div>
      </ThemeProvider> 
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
