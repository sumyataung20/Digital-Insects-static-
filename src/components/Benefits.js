import React from "react";
import { Grid, CardContent, Typography } from "@mui/material";
import Benefits from "../Images/Benefits.png";
import { useMediaQuery } from "@mui/material";
import { Container } from "@mui/material";
import "../App.css";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title1: {
    color: "#B10B0B",
    fontSize: 40,
    fontWeight: 200,
    fontFamily: "My Font",
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 35,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },

  span: {
    color: "#550F0F",
    fontWeight: 900,
    fontFamily: "Card Font",
    marginRight: "5px",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },

  span1: {
    color: "#6E0808",
    fontWeight: 100,
    fontFamily: "Card Font",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },

  img: {
    width: "500px",
    height: "500px",
    marginLeft: "200px",
    objectFit: "contain",

    [theme.breakpoints.down("xl")]: {
      marginLeft: "200px",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "100px",
    },

    [theme.breakpoints.down("md")]: {
      width: "500px",
      height: "500px",
      marginLeft: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    },
  },

  padding: {
    paddingTop: "80px",
    paddingBottom: "80px",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
      // paddingBottom: "0px",
    },
  },

  container: {
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
  },
}));

const styles = {
  beneimg: {
    width: "600px",
    height: "600px",
  },
};

const Benefitcomponent = () => {
  const classes = useStyles();
  const isReallyBigScreen = useMediaQuery("(min-width: 3440px)");
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={isReallyBigScreen ? styles.beneimg : styles.beneimg2}
        >
          <img src={Benefits} className={classes.img} alt="img" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CardContent className={classes.padding}>
            <div className={classes.title1}>
              Benefits of having a website for a business
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "20px" }}
            >
              <p style={{ padding: "5px 0px" }}>
                <span className={classes.span}>Increased online presence:</span>
                <span className={classes.span1}>
                  A website provides a platform for your business to be visible
                  to potential customers online, which can increase your reach
                  and attract more customers.
                </span>
              </p>
              <p style={{ padding: "5px 0px" }}>
                <span className={classes.span}>Improved credibility:</span>
                <span className={classes.span1}>
                  Having a professional-looking website can enhance your
                  business's credibility and help establish trust with potential
                  customers.
                </span>
              </p>
              <p style={{ padding: "5px 0px" }}>
                <span className={classes.span}>
                  Better customer engagement:
                </span>
                <span className={classes.span1}>
                  A website can offte a range of tools and features to engage
                  with customers, such as contact forms, social media
                  integration, live chat, and more.
                </span>
              </p>
              <p style={{ padding: "5px 0px" }}>
                <span className={classes.span}>
                  Enhanced marketing opportunities:
                </span>
                <span className={classes.span1}>
                  A website can serve as powerful marketing tool, providing
                  opportunities for SEO, email marketing, content marketing, and
                  other digital marketing tactics.
                </span>
              </p>

              <p style={{ padding: "5px 0px" }}>
                <span className={classes.span}>
                  Increased revenue potential:
                </span>
                <span className={classes.span1}>
                  A website can help you reach new markets and customers,
                  leading to increased revenue and business growth.
                </span>
              </p>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefitcomponent;
