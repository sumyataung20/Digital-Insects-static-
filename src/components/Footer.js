import React from "react";
import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../Images/beetlesWhite.png";
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
  },
  insect: {
    width: "120px",
    paddingTop: "30px",
    marginRight: "30px",
    //  paddingBottom: "px",

    [theme.breakpoints.down("sm")]: {
      width: "100px",
      paddingTop: "50px",
    },
  },

  footertext: {
    paddingTop: "50px",
    marginBottom: "50px",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      fontSize: "15px",
    },
  },
}));
const FooterContainer = styled(AppBar)`
  top: auto;
  bottom: 0;
  background-color: #970707;
`;

const Footer = () => {
  const classes = useStyles();
  return (
    <FooterContainer
      position="static"
      className={classes.container}
      id="footer"
    >
      <div style={{ display: "flex" }}>
        <div>
          <img src={logo} alt="Logo" className={classes.insect} />
        </div>

        <div className={classes.footertext}>
          <p>
            {" "}
            <PhoneIcon sx={{ marginRight: "3px", marginBottom: "2px" }} />{" "}
            Phone: 09 691501020{" "}
          </p>
          <p>
            {" "}
            <EmailIcon sx={{ marginRight: "3px", marginBottom: "2px" }} />{" "}
            Email: info@digitalinsects.com{" "}
          </p>
          <p>
            <FacebookIcon sx={{ marginRight: "3px", marginBottom: "3px" }} />
            <span sx={{ marginRight: "2px" }}> Facebook: </span>
            <a
              href="https://www.facebook.com/digitalinsects"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              Digital Insects
            </a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
