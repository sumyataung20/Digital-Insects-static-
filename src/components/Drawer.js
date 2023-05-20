import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@mui/material";
import { Button } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RedeemIcon from "@mui/icons-material/Redeem";
import CallIcon from "@mui/icons-material/Call";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,

    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#970707",
  },

  drawerContainer: {
    overflow: "auto",
  },
  a: {
    color: "#FFFFFF",
    textDecoration: "none",

    "&:hover": {
      color: "#000000",
    },
  },

  navbar: {
    listStyleType: "none",
    paddingTop: theme.spacing(3),
  },

  listitem: {
    marginBottom: "10px",

    "&:hover": {
      color: "rgba(0,0,0,0.5)",
    },
  },

  icon: {
    marginRight: "8px",
  },
}));

const DrawerLeft = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <ul className={classes.navbar}>
            <li className={classes.listitem} onClick={handleLinkClick}>
              <Button variant="text">
                <a
                  href="#banner"
                  className={classes.a}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  <HomeIcon
                    sx={{ fontSize: "20px" }}
                    className={classes.icon}
                  />{" "}
                  <span>Home</span>
                </a>
              </Button>
            </li>

            <li className={classes.listitem} onClick={handleLinkClick}>
              <Button variant="text">
                <a
                  href="#services"
                  className={classes.a}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  <DesignServicesIcon
                    sx={{ fontSize: "20px" }}
                    className={classes.icon}
                  />
                  Services
                </a>
              </Button>
            </li>
            <li className={classes.listitem}>
              <Button variant="text">
                {" "}
                <a
                  href="#packages"
                  className={classes.a}
                  onClick={handleLinkClick}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  <RedeemIcon
                    sx={{ fontSize: "20px" }}
                    className={classes.icon}
                  />
                  Packages
                </a>
              </Button>
            </li>
            <li className={classes.listitem}>
              <Button variant="text">
                <a
                  href="#footer"
                  className={classes.a}
                  onClick={handleLinkClick}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  <CallIcon
                    sx={{ fontSize: "20px" }}
                    className={classes.icon}
                  />
                  Contact Us
                </a>{" "}
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto", padding: "5px" }}
        onClick={handleToggleDrawer}
        className={classes.menu}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerLeft;
