import React from "react";
import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../Images/beetlesWhite.png";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
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
          <p> Phone: 09888666558 </p>
          <p> Email: digitalinsects.gmail.com </p>
          <div className={classes.footerIcon}>
            <IconButton
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{ color: "#ffffff" }}
            >
              <FaFacebook size={32} />
            </IconButton>

            <IconButton
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{ color: "#ffffff" }}
            >
              <FaFacebookMessenger size={32} />
            </IconButton>

            <IconButton
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{ color: "#ffffff" }}
            >
              <FaTelegram size={32} />
            </IconButton>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
