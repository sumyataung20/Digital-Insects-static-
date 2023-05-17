import React from "react";
import { useState } from "react";
import {
     AppBar,
     Tabs,
     Toolbar,
     Tab,
     useMediaQuery,
     useTheme,
} from "@mui/material";
import MyComponent from "./MyComponent";
import DrawerLeft from "./Drawer";
// import CustomAppBar from "./AppBar";

const PAGES = ["Home", "Services", "Packages", "Contact Us"];
const Header = () => {
     const [data, setData] = useState();
     const theme = useTheme();
     const isMatch = useMediaQuery(theme.breakpoints.down("md"));

     return (
          <>
               <React.Fragment>
                    <AppBar sx={{ backgroundColor: "#970707" }}>
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
                                                       value={data}
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

export default Header;
