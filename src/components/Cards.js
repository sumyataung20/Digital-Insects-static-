import Card1 from "../Images/Card1.png";
import Card2 from "../Images/Card2.png";
import Card3 from "../Images/Card3.png";
import Card4 from "../Images/Card4.png";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#FBF5F5",
    marginTop: "-25px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
    },
  },

  img: {
    width: "80px",

    height: "80px",
    objectFit: "contain",

    padding: "10px",
  },

  title: {
    textAlign: "center",
    fontWeight: "900",
    //      card: {
    fontFamily: "Number Font",
    fontSize: "20px",
    letterSpacing: "1px",
    color: "#000000",

    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },

  subtitle: {
    color: "#000000",
  },

  content: {
    color: "#404040",
    fontSize: "18px",
    textAlign: "center",
    paddingBottom: "50px",
    marginTop: "20px",

    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  card1: {
    marginRight: "15px",
  },

  card2: {
    marginRight: "15px",
  },

  card3: {
    marginRight: "15px",
  },

  card4: {
    marginRight: "15px",
  },

  container: {
    padding: "20px 15px",
  },
}));
function MyComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.box} id="services">
      <Container maxWidth="xl">
        <div className={classes.classcontainer}>
          <Grid container spacing={2} sx={{ backgroundColor: "#FBF5F5" }}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.card1}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <img src={Card1} alt="card1" className={classes.img} />
                </div>{" "}
                <br />
                <p className={classes.title}>
                  WEBSITE DESIGN AND <br /> DEVELOPMENT
                </p>
                <div className={classes.content}>
                  We create custom websites tailored to your specific needs and
                  goals.
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.card2}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <img src={Card2} className={classes.img} alt="card2" />{" "}
                </div>{" "}
                <br />
                <p className={classes.title}>
                  WEBSITE MAINTENCE AND <br /> SUPPORT
                </p>
                <div className={classes.content}>
                  We provide ongoing website maintence and support to ensure
                  your website stays up-to-date and secure
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.card3}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <img src={Card3} className={classes.img} alt="card3" />{" "}
                </div>{" "}
                <br />
                <p className={classes.title}>
                  SEARCH ENGINE OPTIMIZATION <br /> (SEO)
                </p>
                <div className={classes.content}>
                  We use proven SEO strategies to improve your search engine
                  rankings and drive more traffic to your website.
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.card4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <img src={Card4} className={classes.img} alt="card4" />{" "}
                </div>
                <br />
                <p className={classes.title}>
                  WEBSITE HOSTING AND <br /> DOMAIN REGISTRATION
                </p>
                <div className={classes.content}>
                  We offer reliable website hosting and domain registration
                  services to ensure your website stays online and accessible.
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default MyComponent;
