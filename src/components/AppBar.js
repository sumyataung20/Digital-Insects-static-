import { AppBar, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import MyComponent from "./MyComponent";
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

  listitem: {
    float: "left",
    fontSize: "20px",
  },

  navbar: {
    listStyleType: "none",
    padding: "20px 45px",
    paddingBottom: "30px",
    marginTop: "15px",
  },

  a: {
    margin: "5px",
    display: "block",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "10px 16px",
    paddingBottom: "2px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 500,
    transition: "color fontSize 0.3s",
    "&:hover": {
      color: "rgba(0,0,0,0.5)",
    },

    "&.active": {
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
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Toolbar>
            <MyComponent />

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
      </React.Fragment>
    </>
  );
};
export default AppBarComponent;
