// import {
//   AppBar,
//   Tabs,
//   Tab,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// import Banner from "./Banner";
// import MyComponent from "./Cards";
// import ScrollableTable from "./ScrollCards";
// import Footer from "./Footer";
// import DrawerLeft from "./Drawer";
// const PAGES = ["Home", "Services", "Packages", "Contact Us"];
// // const PAGES = [
// //   { label: "Home", path: "Footer" },
// //   { label: "Services", path: "/Footer" },
// //   { label: "Packages", path: "/Footer" },
// //   { label: "Contact Us", path: "/Footer" },
// // ];
// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: "#970707",

//     [theme.breakpoints.down("xl")]: {
//       height: 58,
//       width: "100vw",
//     },
//     [theme.breakpoints.down("lg")]: {
//       height: 58,
//       width: "100vw",
//     },
//     [theme.breakpoints.down("md")]: {
//       height: 58,
//       width: "100vw",
//     },
//     [theme.breakpoints.down("sm")]: {
//       height: 55,
//       width: "100vw",
//     },
//     [theme.breakpoints.down("xs")]: {
//       height: 55,
//       width: "100vw",
//     },
//   },
// }));

// const AppBarComponent = (props) => {
//   const [data, setData] = useState();

//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   const classes = useStyles();
//   return (
//     <>
//       <React.Fragment>
//         <AppBar position="static" className={classes.appBar} elevation={0}>
//           <Toolbar>
//             <MyComponent />

//             {isMatch ? (
//               <>
//                 <DrawerLeft />
//               </>
//             ) : (
//               <>
//                 {/* <Tabs
//                                              textColor="inherit"
//                                              value={data}
//                                              onChange={(e, data) =>
//                                                   setData(data)
//                                              }
//                                              TabIndicatorProps={{
//                                                   style: {
//                                                        backgroundColor:
//                                                             "#fafafa",
//                                                   },
//                                              }}
//                                         >
//                                              {PAGES.map((page, index) => (
//                                                   <Tab
//                                                        key={index}
//                                                        label={page}
//                                                        sx={{
//                                                             fontWeight: "bold",
//                                                        }}
//                                                   />
//                                              ))}
//                                         </Tabs> */}

//                 <Tabs
//                   textColor="inherit"
//                   value={data}
//                   onChange={(e, data) => setData(data)}
//                   TabIndicatorProps={{
//                     style: {
//                       backgroundColor: "#fafafa",
//                     },
//                   }}
//                 >
//                   {PAGES.map((page, index) => (
//                     <Tab
//                       key={index}
//                       label={page}
//                       //   component={Link}
//                       //   to={page.path}
//                       sx={{
//                         fontWeight: "bold",
//                       }}
//                     />
//                   ))}
//                 </Tabs>
//               </>
//             )}
//           </Toolbar>
//           {/* // <DrawerLeft /> */}
//         </AppBar>
//       </React.Fragment>
//     </>
//   );
// };
// export default AppBarComponent;

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
      height: 58,
    },
    [theme.breakpoints.down("lg")]: {
      height: 58,
    },
    [theme.breakpoints.down("md")]: {
      height: 58,
    },
    [theme.breakpoints.down("sm")]: {
      height: 55,
    },
    [theme.breakpoints.down("xs")]: {
      height: 55,
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
        <AppBar position="static" className={classes.appBar} elevation={0}>
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
                  onChange={(e, data) => setData(data)}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#fafafa",
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
