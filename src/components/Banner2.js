import { makeStyles } from "@material-ui/core/styles";

import banner from "../Images/Banner.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    [theme.breakpoints.down("xl")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
      marginLeft: "50px",
      width: "700px",
      height: "800px",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      width: "550px",
      height: "550px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      width: "600px",
      height: "600px",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      width: "500px",
      height: "500px",
      margin: "auto",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "350px",
      height: "400px",
    },
  },

  container: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
    },
  },
}));

const Banner2 = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={banner} alt="logo" className={classes.banner} />
    </div>
  );
};

export default Banner2;
