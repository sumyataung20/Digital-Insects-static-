import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#B10B0B",
    fontSize: 50,
    fontWeight: 200,
    textAlign: "center",
    fontFamily: "My Font",

    paddingTop: "40px",

    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },

  subtitle: {
    color: "#B10B0B",
    fontSize: 18,
    fontWeight: 100,
    textAlign: "center",
    fontFamily: "Card Font",
    padding: "10px 0",
    marginBottom: "50px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },

  box: {
    backgroundColor: "#FBF5F5",
    marginTop: "100px",
    paddingBottom: theme.spacing(15),
  },

  card1: {
    backgroundColor: "#FFFFFF",

    borderTop: "3px solid #B10B0B",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    width: "auto",

    marginBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card2: {
    backgroundColor: "#FFFFFF",

    borderTop: "3px solid #B10B0B",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    position: "relative",
    marginBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  badge: {
    backgroundColor: "#B10B0B",
    color: "#FFFFFF",
    fontFamily: "Card Font",
    fontSize: "16px",
    padding: "4px 30px",
    letterSpacing: "1px",
    fontWeight: 900,
    position: "absolute",

    top: "-6%",
    left: " 50%",
    transform: "translateX(-50%)",
  },

  card3: {
    backgroundColor: "#FFFFFF",

    borderTop: "3px solid #B10B0B",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    marginBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
function MyComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.box} id="packages">
      <Container maxWidth="xl">
        <div className={classes.title}>Choose Your Path To Success</div>
        <div className={classes.subtitle}>
          ----- TAILORED FOR YOUR WEB SERVICE GOALS -----
        </div>
        <div className={classes.classcontainer}>
          <Grid container spacing={2} sx={{ backgroundColor: "#FBF5F5" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card1}>
                <h6
                  style={{
                    fontFamily: "Card Font2",
                    color: "#B10B0B",
                    textAlign: "center",
                    fontSize: 25,
                    paddingTop: "40px",
                    marginBottom: "20px",
                    fontWeight: 100,
                  }}
                >
                  Intial Package
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span
                    style={{
                      color: "#B10B0B",
                      fontWeight: 900,
                      fontSize: "25px",
                      letterSpacing: "2px",
                      fontFamily: "Number Font",
                    }}
                  >
                    85000
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div
                  style={{
                    color: "#404040",
                    textAlign: "center",
                    paddingBottom: "50px",
                    marginTop: "20px",
                  }}
                >
                  Looking for an affordable web solution? <br />
                  Our Initial Packages is suitable for you!
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card2}>
                <span className={classes.badge}>POPULAR</span>
                <h6
                  style={{
                    fontFamily: "Card Font2",
                    color: "#B10B0B",
                    textAlign: "center",
                    fontSize: 25,
                    paddingTop: "40px",
                    marginBottom: "20px",
                    fontWeight: 100,
                  }}
                >
                  Recommended Package
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span
                    style={{
                      color: "#B10B0B",
                      fontWeight: 900,
                      fontSize: "25px",
                      letterSpacing: "2px",
                      fontFamily: "Number Font",
                    }}
                  >
                    180000
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div
                  style={{
                    color: "#404040",
                    textAlign: "center",
                    paddingBottom: "30px",
                    marginTop: "20px",
                  }}
                >
                  Ready to take your online presence to the <br />
                  next level? Our Recommended Package is <br /> perfect for you!
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card3}>
                <h6
                  style={{
                    fontFamily: "Card Font2",
                    color: "#B10B0B",
                    textAlign: "center",
                    fontSize: 25,
                    paddingTop: "40px",
                    marginBottom: "20px",
                    fontWeight: 100,
                  }}
                >
                  Premium Package
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span
                    style={{
                      color: "#B10B0B",
                      fontWeight: 900,
                      fontSize: "25px",
                      letterSpacing: "2px",
                      fontFamily: "Number Font",
                    }}
                  >
                    300000
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div
                  style={{
                    color: "#404040",
                    textAlign: "center",
                    paddingBottom: "30px",
                  }}
                >
                  Looking for the ultimate online solution? <br />
                  Our Premium Package offers everything <br /> you need!
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
