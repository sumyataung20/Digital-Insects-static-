import { AppBar, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "../Images/logo.png";

import DrawerLeft from "./Drawer";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#970707",

    [theme.breakpoints.down("xl")]: {
      height: 58,
      width: "100vw",
    },
    [theme.breakpoints.down("lg")]: {
      height: 58,
      width: "100vw",
    },
    [theme.breakpoints.down("md")]: {
      height: 58,
      width: "100vw",
    },
    [theme.breakpoints.down("sm")]: {
      height: 55,
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      height: 55,
      width: "100vw",
    },
  },
  logo: {
    paddingBottom: 0,

    [theme.breakpoints.down("xl")]: {
      marginLeft: theme.spacing(32),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "70px",
      height: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "75px",
      height: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "73px",
      height: "73px",
    },
  },

  listitem: {
    float: "left",
    fontSize: "20px",
  },

  navbar: {
    position: "absolute",
    left: "18%",
    top: 0,
    listStyleType: "none",

    marginTop: "15px",
    marginBottom: "23px",
  },

  a: {
    margin: "5px",
    display: "block",
    color: "#FFFFFF",
    textAlign: "center",
    marginRight: "35px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 500,
    // transition: "color fontSize 0.3s",
    "&:hover": {
      color: "rgba(0,0,0,0.5)",
    },
  },
}));

const AppBarComponent = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
        >
          <AppBar
            className={classes.appBar}
            elevation={0}
            style={{ position: "relative" }}
          >
            <Toolbar>
              <div style={{ position: "absolute", left: 0, top: "-22%" }}>
                <img
                  src={logo}
                  alt={logo}
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "80px",
                    height: "80px",

                    objectFit: "contain",
                  }}
                  className={classes.logo}
                />
              </div>

              {isMatch ? (
                <>
                  <DrawerLeft />
                </>
              ) : (
                <>
                  <ul className={classes.navbar}>
                    <li className={classes.listitem}>
                      <a href="#banner" className={classes.a}>
                        Home
                      </a>
                    </li>
                    <li className={classes.listitem}>
                      <a href="#services" className={classes.a}>
                        Services
                      </a>
                    </li>
                    <li className={classes.listitem}>
                      <a href="#packages" className={classes.a}>
                        Packages
                      </a>
                    </li>
                    <li className={classes.listitem}>
                      <a href="#footer" className={classes.a}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </Toolbar>
            {/* // <DrawerLeft /> */}
          </AppBar>
        </div>
      </React.Fragment>
    </>
  );
};
export default AppBarComponent;
