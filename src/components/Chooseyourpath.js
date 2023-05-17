import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
     title: {
          color: "#B10B0B",
          fontSize: 50,
          fontWeight: 200,
          textAlign: "center",
          fontFamily: "My Font",

          paddingTop: "40px",

          [theme.breakpoints.down("md")]: {
               fontSize: 40
           },

          [theme.breakpoints.down("sm")]: {
              fontSize: 30
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
               fontSize: 15
           },
     },

     box: {
          backgroundColor: "#FBF5F5",
          marginTop: "100px",
     },

     card1: {
          backgroundColor: "#FFFFFF",
          width: "500px",
          height: "auto",
          borderTop: "3px solid #B10B0B",
          margin: "auto",
          
     }
}));
function MyComponent() {
     const classes = useStyles();
     return (
          <Box className={classes.box}>
               <div className={classes.title}>Choose Your Path To Success</div>
               <div className={classes.subtitle}>
                    ----- TAILORED FOR YOUR WEB SERVICE GOALS -----
               </div>
               {/* <Grid container spacing={2} sx={{ backgroundColor: "#FBF5F5" }}>
                    <Grid item xs={12} sm={12} md={4} > */}
                    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
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
                                   }}
                              >
                                   Looking for an affordable web solution?{" "}
                                   <br />
                                   Our Initial Packages is suitable for you!
                              </div>
                         </div>
                    {/* </Grid> */}
            
                    </Box>
          </Box>
     );
}

export default MyComponent;
