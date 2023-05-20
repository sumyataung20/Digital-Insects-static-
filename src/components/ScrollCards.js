import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
const useStyles = makeStyles({
  tableContainer: {
    overflowX: "auto",
    maxWidth: "100%",
  },

  table: {
    // tableLayout: "auto",
  },

  tableCell: {
    minWidth: 150,
  },

  tableRow: {
    "&:first-child": {
      borderTop: "none",
    },
  },

  box: {
    backgroundColor: "#FBF5F5",

    paddingBottom: "150px",
  },
});
const ScrollableTable = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container maxWidth="lg">
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow
                style={{
                  borderTop: "0px",
                  borderBottom: "2px solid #DD0E0E",
                  backgroundColor: "#FBF5F5",
                  paddingTop: "50px",
                }}
                className={classes.tableRow}
              >
                <TableCell
                  className={classes.tableCell}
                  sx={{
                    color: "#B10B0B",
                    fontWeight: "900",
                    fontSize: "17px",
                    width: "300px",
                  }}
                >
                  Features
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  sx={{
                    color: "#B10B0B",
                    fontWeight: "900",
                    fontSize: "17px",
                    width: "300px",
                  }}
                >
                  Initial Package
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  sx={{
                    color: "#B10B0B",
                    fontWeight: "900",
                    fontSize: "16px",
                    width: "300px",
                  }}
                >
                  Recommended Package
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  sx={{
                    color: "#B10B0B",
                    fontWeight: "900",
                    fontSize: "17px",
                    width: "300px",
                  }}
                >
                  Premium Package
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>Web pages</TableCell>
                <TableCell className={classes.tableCell}>
                  Up to 10 pages
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Up to 50 pages
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  sx={{ color: "#B10B0B" }}
                >
                  Unlimited Pages
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Responsiveness
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {" "}
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {" "}
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>Design</TableCell>
                <TableCell className={classes.tableCell}>Standard</TableCell>
                <TableCell className={classes.tableCell}>Innovative</TableCell>
                <TableCell className={classes.tableCell}>Tailored</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Social Media integration
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Messenger Integration
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Content Management System
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  User Registration
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Team management system
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Admin portal
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Push notification
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <ClearIcon sx={{ color: "#DD0E0E" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CheckIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#FBF5F5" }}>
                <TableCell className={classes.tableCell}>
                  Customer Support
                </TableCell>
                <TableCell className={classes.tableCell}>Normal</TableCell>
                <TableCell className={classes.tableCell}>
                  Priopritized
                </TableCell>
                <TableCell className={classes.tableCell}>24/7</TableCell>
              </TableRow>

              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default ScrollableTable;
