import { AppBar, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "../App.css";

import DrawerLeft from "./Drawer";
import MyComponent from "./MyComponent";
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

  listitem: {
    float: "left",
  },

  navbar: {
    listStyleType: "none",

    marginTop: "15px",
    marginBottom: "23px",
  },

  a: {
    fontFamily: "My Font",
    margin: "5px",
    display: "block",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "10px 25px",
    textDecoration: "none",
    fontSize: "20px",
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
        {/* <Container maxWidth="xl"> */}
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
              <div>
                <MyComponent />
              </div>

              {isMatch ? (
                <>
                  <DrawerLeft />
                </>
              ) : (
                <>
                  <ul className={classes.navbar}>
                    <li className={classes.listitem}>
                      <a href="#home" className={classes.a}>
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
                      <a href="#contactus" className={classes.a}>
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
        {/* </Container> */}
      </React.Fragment>
    </>
  );
};
export default AppBarComponent;
