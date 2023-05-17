import React from "react";
import {
     Card,
     CardActionArea,
     CardMedia,
     CardContent,
     Typography,
     Box,
   
} from "@mui/material";

import Card1 from "../Images/Card1.png";
import Card2 from "../Images/Card2.png";
import Card3 from "../Images/Card3.png";
import Card4 from "../Images/Card4.png";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
     root: {
          backgroundColor: "#FBF5F5",
     },
     card: {
          fontFamily: "CardFont",
          color: "#000000",
     },
     container: {
          margin: "auto",
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
     },

}));

const ResponsiveUpDownCard = ({ image, title, content }) => {
     const classes = useStyles();
     return (
          <div className={classes.root}>
               <Box className={classes.container}>
                    <Card
                         variant="outlined"
                         style={{
                              border: "none",
                              shadow: 0,

                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",

                              fontFamily: "Card Font",
                         }}
                         className={classes.card}
                    >
                         <CardActionArea
                              style={{ flex: 1 }}
                              sx={{ backgroundColor: "#FBF5F5" }}
                              className="custom-card-media"
                         >
                       
                              <CardMedia
                                   component="img"
                                   alt="img"
                                   image={image}
                                   style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "contain",
                                        margin: "auto",
                                        padding: "10px",
                                        backgroundColor: "#FBF5F5",
                                   }}
                                   className="custom-card-media"
                              />
                         </CardActionArea>
                    

                         <CardContent sx={{ backgroundColor: "#FBF5F5" }}>
                              <Typography
                                   gutterBottom
                                   component="div"
                                   className={classes.card}
                                   sx={{
                                        textAlign: "center",
                                        fontWeight: "900",
                                   }}
                              >
                                   {title}
                              </Typography>
                              <Typography
                                   variant="body2"
                                   color="text.secondary"
                                   className={classes.card}
                                   sx={{
                                        textAlign: "center",
                                        fontWeight: "600",
                                   }}
                              >
                                   {content}
                              </Typography>
                         </CardContent>
                    </Card>
               </Box>
          </div>
     );
};

const Cards = () => {
     return (
          <Grid container spacing={2} sx={{ background: "#FBF5F5" }}>
               <Grid item xs={12} sm={6} md={6} lg={3}>
                    <ResponsiveUpDownCard
                         image={Card1}
                         title="WEBSITE DESIGN AND DEVELOPMENT"
                         content="We create custom websites tailored to your specific needs and goals."
                    />
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={3}>
                    <ResponsiveUpDownCard
                         image={Card2}
                         title="WEBSITE MAINTENANCE AND SUPPORT"
                         content="We provide ongoing website maintenance and support to ensure your website stays up-to-data and secure."
                    />
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={3}>
                    <ResponsiveUpDownCard
                         image={Card3}
                         title="SEARCH ENGINE OPTIMIZATION(SEO)"
                         content="We use proven SEO strategies to improve your search engine rankings and drive more traffic to your website."
                    />
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={3}>
                    <ResponsiveUpDownCard
                         image={Card4}
                         title="WEBSITE HOSTING AND DOMAIN REGISTRATION"
                         content="We offer reliable website hosting and domain registration services to ensure your website stays online and accessible."
                    />
               </Grid>
               {/* Add more responsive cards */}
          </Grid>
     );
};

export default Cards;
