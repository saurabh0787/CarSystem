import React from "react";
import { Box, Typography } from "@mui/material";
import "./page.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",
      }}
    >
      {/* Heading */}
      <div className="heading-car">
        <h1>CARSYSTEMS</h1>
      </div>

      {/* Sidebar Options */}
      <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "space-evenly",
        //   height: "100%", 
        // }}
      >
         <Link href="/Clientdashboard" passHref>
            
              <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
           Dashboard
        </Typography>
          </Link>
        <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
          Konto
        </Typography>
        <Link href="/" passHref>
        <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
          Medarbejdar
        </Typography>
        </Link>
        <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
          Kunder
        </Typography>
        <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
          Biler
        </Typography>
        <Typography
          className="sidebar-option"
          sx={{ fontWeight: "bold", padding: "1rem" }}
        >
          Booking
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
