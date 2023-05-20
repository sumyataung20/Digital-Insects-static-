import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Banner2 from "./Banner2";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "My Font",
    color: "#6E0808",

    [theme.breakpoints.down("xl")]: {
      marginLeft: theme.spacing(35),
      marginTop: theme.spacing(20),
      fontSize: 80,
      fontWeight: 500,
      lineHeight: "120px",
      letterSpacing: "5px",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(20), // Margin for lg size and above
      marginLeft: theme.spacing(10),
      fontSize: 65,
      fontWeight: 300,
      lineHeight: "90px",
      letterSpacing: "4px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(18), // Margin for md size and below
      marginLeft: theme.spacing(3),

      fontSize: 65,
      fontWeight: 300,
      lineHeight: "100px",
      letterSpacing: "2px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10), // Margin for sm size and below
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      fontSize: 50,
      fontWeight: 200,
      lineHeight: "80px",
      letterSpacing: "2px",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10), // Margin for sm size and below
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      fontSize: 40,
      fontWeight: 200,
      lineHeight: "80px",
      letterSpacing: "2px",
    },
  },

  text1: {
    color: "#000000",
    fontFamily: "My Font1",
    [theme.breakpoints.down("xl")]: {
      marginLeft: theme.spacing(35),
      marginTop: theme.spacing(5),
      fontSize: 25,
      fontWeight: 100,

      letterSpacing: "1px",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(5), // Margin for lg size and above
      marginLeft: theme.spacing(10),
      fontSize: 18,
      fontWeight: 100,
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5), // Margin for md size and below
      marginLeft: theme.spacing(3),

      fontSize: 15,
      fontWeight: 80,
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3), // Margin for sm size and below
      margin: "auto",
      textAlign: "center",
      fontSize: 18,
      fontWeight: 50,
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3), // Margin for sm size and below
      margin: "auto",
      textAlign: "center",
      fontSize: 15,
      fontWeight: 15,
    },
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="banner">
      <Grid container spacing={2} className={classes.container}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ marginTop: "50%" }}
        >
          <Typography
            variant="h1"
            className={classes.text}
            sx={{ margin: "auto" }}
          >
            GROW YOUR <br />
            BUSINESS WITH <br />
            OUR TEAM
          </Typography>

          <p className={classes.text1} sx={{ margin: "auto" }}>
            Contact for a free consultation today and <br />
            see how our web service can help your <br />
            business thrive
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>
            <Banner2 />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
