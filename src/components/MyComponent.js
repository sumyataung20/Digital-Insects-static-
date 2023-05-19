import { makeStyles } from "@material-ui/core/styles";

import logo from "../Images/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
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
      marginLeft: 0,
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "75px",
      height: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      width: "73px",
      height: "73px",
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
