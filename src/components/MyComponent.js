import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "../Images/Digital Insects Logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingBottom: 0,

    [theme.breakpoints.down("xl")]: {
      marginLeft: theme.spacing(32),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      width: "70px",
      height: "72px",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      width: "70px",
      height: "72px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      width: "70px",
      height: "72x",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),

      width: "70px",
      height: "72px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),

      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      width: "70px",
      height: "72px",
    },
  },
}));

const MyComponent = (props) => {
  const classes = useStyles();
  return (
    // <Avatar className={classes.logo} src="path/to/logo.png" alt="Logo" />
    <img
      src={logo}
      style={{
        backgroundColor: "#FFFFFF",

        objectFit: "contain",
      }}
      alt="logo"
      className={classes.logo}
    />
  );
};

export default MyComponent;
