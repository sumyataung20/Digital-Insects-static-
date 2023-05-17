import {
     AppBar,
     Tabs,
     Tab,
     Toolbar,
     useMediaQuery,
     useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useState } from "react";

import MyComponent from "./MyComponent";
import DrawerLeft from "./Drawer";
const PAGES = ["Home", "Services", "Packages", "Contact Us"];
const useStyles = makeStyles((theme) => ({
     appBar: {
          backgroundColor: "#970707",
        
          [theme.breakpoints.down("xl")]: {
               height: 65,
          },
          [theme.breakpoints.down("lg")]: {
               height: 65,
          },
          [theme.breakpoints.down("md")]: {
               height: 50,
          },
          [theme.breakpoints.down("sm")]: {
               height: 64,
          },
          [theme.breakpoints.down("xs")]: {
               height: 58,
          },
     },
}));

const AppBarComponent = (props) => {
     const [data, setData] = useState();
     const theme = useTheme();
     const isMatch = useMediaQuery(theme.breakpoints.down("md"));
     const classes = useStyles();
     return (

          <>
               <React.Fragment>
                    <AppBar position="static" className={classes.appBar}>
                         <Toolbar>
                              <MyComponent />

                              {isMatch ? (
                                   <>
                                        <DrawerLeft />
                                   </>
                              ) : (
                                   <>
                                        <Tabs
                                             textColor="inherit"
                                             value={data}
                                             onChange={(e, data) =>
                                                  setData(data)
                                             }
                                             TabIndicatorProps={{
                                                  style: {
                                                       backgroundColor:
                                                            "#fafafa",
                                                  },
                                             }}
                                        >
                                             {PAGES.map((page, index) => (
                                                  <Tab
                                                       key={index}
                                                       label={page}
                                                       sx={{
                                                            fontWeight: "bold",
                                                       }}
                                                  />
                                             ))}
                                        </Tabs>
                                   </>
                              )}
                         </Toolbar>
                         {/* // <DrawerLeft /> */}
                    </AppBar>
               </React.Fragment>
          </>
     );
};
export default AppBarComponent;
