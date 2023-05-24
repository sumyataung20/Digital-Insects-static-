import React from "react";
import logo from "../Images/beetlesWhite.png";
import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  insect: {
    width: "120px",
    marginRight: "30px",
    paddingBottom: "20px",

    [theme.breakpoints.down("sm")]: {
      width: "100px",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },

  footertext: {
    color: "#FFFFFF",
    paddingTop: "50px",
    marginBottom: "50px",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      fontSize: "15px",
    },
  },

  appbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "auto",
    bottom: 0,
    backgroundColor: " #970707",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.appbar}>
      <Container position="static" className={classes.container} id="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={logo} alt="Logo" className={classes.insect} />
          </div>

          <div className={classes.footertext}>
            <p>
              {" "}
              <PhoneIcon
                sx={{ marginRight: "3px", marginBottom: "2px" }}
              />{" "}
              <a
                href="tel:09691501020"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                09 691501020{" "}
              </a>
            </p>
            <p>
              {" "}
              <EmailIcon
                sx={{ marginRight: "3px", marginBottom: "2px" }}
              />{" "}
              <a
                href="mailto:info@digitalinsects.com"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                info@digitalinsects.com{" "}
              </a>
            </p>
            <p>
              <FacebookIcon sx={{ marginRight: "3px", marginBottom: "3px" }} />
              <a
                href="https://www.facebook.com/digitalinsects"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Digital Insects
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
