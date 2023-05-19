// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

// import { Link } from "react-router-dom";
// import Banner from "./Banner";
// import MyComponent from "./Cards";
// import ScrollableTable from "./ScrollCards";
// import Footer from "./Footer";

// // const PAGES = [
// //   { label: "Home", component: Banner, path: "./Banner" },
// //   { label: "Services", component: MyComponent, path: "/Cards" },
// //   { label: "Packages", component: ScrollableTable, path: "/ScrollCards" },
// //   { label: "Contact Us", component: Footer, path: "/Footer" },
// // ];

// const PAGES = ["Home", "Services", "Packages", "Contact Us"];

// const DrawerLeft = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   return (
//     <React.Fragment>
//       <Drawer
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         PaperProps={{
//           sx: { width: "50%", backgroundColor: "#970707" },
//         }}
//       >
//         <List>
//           {PAGES.map((page, index) => (
//             <ListItemButton key={index}>
//               <ListItemIcon>
//                 <ListItemText primary={page.label} style={{ color: "white" }} />
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>

//       <IconButton
//         sx={{ color: "white", marginLeft: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
//       >
//         <MenuIcon />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// export default DrawerLeft;

import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const PAGES = ["Home", "Services", "Packages", "Contact Us"];

const DrawerLeft = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: "50%", backgroundColor: "#970707" },
        }}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText style={{ color: "white" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerLeft;
