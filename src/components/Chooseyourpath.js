import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#B10B0B",
    fontSize: 40,
    fontWeight: 200,
    textAlign: "center",
    fontFamily: "My Font",

    paddingTop: "40px",

    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
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
      fontSize: 12,
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
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
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
    fontSize: "14px",
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

  table: {
    marginTop: "100px",
    borderCollapse: "collapse",

    maxWidth: "100%",

    // marginBottom: "80px",
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
  },

  tableContainer: {
    overflowX: "auto",
  },

  th: {
    minWidth: 100,
    color: "#B10B0B",
    fontWeight: "400",
    fontSize: "17px",
    width: "300px",
    padding: "10px 15px",
    whiteSpace: "nowrap",
    textAlign: "center",
  },

  tr: {
    borderTop: "0px",
    borderBottom: "2px solid #DD0E0E",
    backgroundColor: "#FBF5F5",
    paddingTop: "50px",
  },

  tr1: {
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    // backgroundColor: "#FBF5F5",
  },

  badge1: {
    position: "absolute",
    right: 40,
    top: -8,
    backgroundColor: "#B10B0B",
    color: "#FFFFFF",
    width: "60px",
    textAlign: "center",
    padding: "4px 8px",
    borderRadius: "16px",
    fontSize: "12px",
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      right: 10,
      top: -10,
    },
  },
  badgeholder: {
    position: "relative",
  },

  h6: {
    fontFamily: "Card Font2",
    color: "#B10B0B",
    textAlign: "center",
    fontSize: 25,
    paddingTop: "40px",
    marginBottom: "20px",
    fontWeight: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },

  cost: {
    color: "#B10B0B",
    fontWeight: 900,
    fontSize: "25px",
    letterSpacing: "2px",
    fontFamily: "Number Font",
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },

  text: {
    color: "#404040",
    textAlign: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "30px",
  },
}));
function MyComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container maxWidth="xl" id="packages" style={{ paddingTop: "50px" }}>
        <div className={classes.title}>Choose Your Path To Success</div>
        <div className={classes.subtitle}>
          ----- TAILORED FOR YOUR WEB SERVICE GOALS -----
        </div>
        <div className={classes.classcontainer}>
          <Grid container spacing={2} sx={{ backgroundColor: "#FBF5F5" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card1}>
                <h6 className={classes.h6}>Intial Package</h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span className={classes.cost}>85,000</span> <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div className={classes.text}>
                  Looking for an affordable web solution? Our Initial Packages
                  is suitable for you!
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card2}>
                <span className={classes.badge}>POPULAR</span>
                <h6 className={classes.h6}>Recommended Package</h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span className={classes.cost}>180,000</span> <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div className={classes.text}>
                  Ready to take your online presence to the next level? Our
                  Recommended Package is perfect for you!
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={classes.card3}>
                <h6 className={classes.h6}>Premium Package</h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Card Font",
                  }}
                >
                  <span className={classes.cost}>300,000</span> <br />{" "}
                  <span
                    style={{
                      color: "#5A5656",
                      fontWeight: 300,
                    }}
                  >
                    MMK / mo
                  </span>
                </p>
                <div className={classes.text}>
                  Looking for the ultimate online solution? Our Premium Package
                  offers everything you need!
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.tableContainer}>
          <table className={classes.table}>
            <tbody>
              <tr className={classes.tr}>
                <th
                  className={classes.th}
                  style={{
                    color: "#404040",
                    minWidth: 150,
                    textAlign: "start",
                    fontWeight: "500",
                    fontSize: "18px",
                    width: "300px",
                    padding: "10px 15px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Features
                </th>
                <th
                  className={classes.th}
                  style={{
                    color: "#B10B0B",
                    minWidth: 150,
                    // textAlign: "start",
                    fontWeight: "500",
                    fontSize: "18px",
                    width: "300px",
                    padding: "10px 15px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Initial Package
                </th>

                <th
                  style={{
                    color: "#B10B0B",
                    minWidth: 150,

                    fontWeight: "500",
                    fontSize: "18px",
                    width: "300px",
                    padding: "10px 15px",
                    whiteSpace: "nowrap",
                  }}
                  className={classes.badgeholder}
                >
                  {" "}
                  <span className={classes.badge1}>popular</span>
                  Recommended Package
                </th>

                <th
                  className={classes.th}
                  style={{
                    color: "#B10B0B",
                    minWidth: 150,

                    fontWeight: "500",
                    fontSize: "18px",
                    width: "300px",
                    padding: "10px 15px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Premium Package
                </th>
              </tr>
              <tr className={classes.tr1}>
                <td
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Web pages
                </td>
                <td className={classes.th} style={{ color: "#404040" }}>
                  Up to 10 pages
                </td>
                <td className={classes.th}>Up to 50 pages</td>
                <td className={classes.th} style={{ color: "#404040" }}>
                  Unlimited Pages
                </td>
              </tr>
              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Responsiveness
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Design
                </th>
                <th className={classes.th} style={{ color: "#404040" }}>
                  Standard
                </th>
                <th className={classes.th} style={{ color: "#B10B0B" }}>
                  Innovative
                </th>
                <th className={classes.th} style={{ color: "#404040" }}>
                  Tailored
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Social Media Integration
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Messenger Integration
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Content Management System
                </th>
                <th className={classes.th}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  User Registration
                </th>
                <th className={classes.th}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Team Management System
                </th>
                <th className={classes.th}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Admin portal
                </th>
                <th className={classes.th}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Push notification
                </th>
                <th className={classes.th}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
                <th className={classes.th}>
                  <CheckIcon sx={{ color: "green" }} />
                </th>
              </tr>

              <tr className={classes.tr1}>
                <th
                  className={classes.th}
                  style={{ color: "#404040", textAlign: "start" }}
                >
                  Customer Support
                </th>
                <th className={classes.th} style={{ color: "#404040" }}>
                  Normal
                </th>
                <th className={classes.th} style={{ color: "#B10B0B" }}>
                  Prioritized
                </th>
                <th className={classes.th} style={{ color: "#404040" }}>
                  24/7
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Box>
  );
}

export default MyComponent;
