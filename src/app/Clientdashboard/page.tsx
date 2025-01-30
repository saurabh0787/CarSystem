import React from "react";
import {
  Box,
  Typography,
  Button,
//   Divider,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import "./page.css";
import Sidebar from "../Dashboard/Sidebar/page";


const page = () => {
  const pickups = [
    {
      dateTime: "Mar 19, 09:30 AM",
      customer: "Robert Thompson",
      email: "robert.t@email.com",
      seller: "Chris Evans",
      vehicle: "Mercedes GLC (GHI789)",
      status: "Not Picked Up",
    },
    {
      dateTime: "Mar 20, 09:00 AM",
      customer: "John Smith",
      email: "john.smith@email.com",
      seller: "Mike Johnson",
      vehicle: "Tesla Model 3 (ABC123)",
      status: "Pending",
    },
    {
      dateTime: "Mar 20, 10:30 AM",
      customer: "Sarah Wilson",
      email: "sarah.w@email.com",
      seller: "David Brown",
      vehicle: "BMW X5 (XYZ789)",
      status: "Completed",
    },
    {
      dateTime: "Mar 20, 02:00 PM",
      customer: "Emily Davis",
      email: "emily.d@email.com",
      seller: "James Wilson",
      vehicle: "Audi Q7 (DEF456)",
      status: "Pending",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "Completed":
        return "status completed";
      case "Not Picked Up":
        return "status notPickedUp";
      default:
        return "status";
    }
  };

  return (
    
    <Box className="container">
         <div>
        <Sidebar></Sidebar>
      </div> 
     <div style={{ width :"100%",paddingLeft:"40px"}}> 
     <Typography variant="h4" className="header">
          Dashboard 
        </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" className="header">
          Vehicle Pickup Schedule 
        </Typography>
        <IconButton>
          <PrintIcon />
        </IconButton>
      </Box>
      <Typography className="subHeader">Thursday, January 23, 2025</Typography> 

      {/* Stats Section */}
      <Box className="stats">
        <Box className="statCard">
          <Typography>Total Scheduled</Typography>
          <Typography className="statNumber">10</Typography>
        </Box>
        <Box className="statCard">
          <Typography>Completed Today</Typography>
          <Typography className="statNumber">3</Typography>
        </Box>
        <Box className="statCard">
          <Typography>Pending</Typography>
          <Typography className="statNumber">7</Typography>
        </Box>
      </Box>

      {/* Filters */}
      <Box className="filters">
        <Button variant="contained" sx={{background:"black"}}>My Pickups</Button>
        <Button sx={{background:"grey",color:"white"}}>Today&apos;s Pickups</Button>
        <Button sx={{background:"grey",color:"white"}}>All Pickups</Button>
        <Button sx={{background:"grey",color:"white"}}>Completed Pickups</Button>
        <TextField label="Search" variant="outlined" size="small" />
        <TextField type="date" size="small" />
        <Select size="small" defaultValue="">
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Not Picked Up">Not Picked Up</MenuItem>
        </Select>
      </Box>

      {/* Pickup Table */}
      <Box className="tableContainer">
        <Box display="flex" className="row tableHeader">
          <Typography className="cell">Date & Time</Typography>
          <Typography className="cell">Customer</Typography>
          <Typography className="cell">Seller</Typography>
          <Typography className="cell">Vehicle Details</Typography>
          <Typography className="cell">Status</Typography>
          <Typography className="cell">Actions</Typography>
        </Box>
        {pickups.map((pickup, index) => (
          <Box key={index} display="flex" className="row">
            <Typography className="cell">{pickup.dateTime}</Typography>
            <Typography className="cell">
              {pickup.customer}
              <br />
              <small>{pickup.email}</small>
            </Typography>
            <Typography className="cell">{pickup.seller}</Typography>
            <Typography className="cell">{pickup.vehicle}</Typography>
            <Typography className={getStatusClass(pickup.status)}>
              {pickup.status}
            </Typography>
            <Box className="cell actionButtons">
              <Button
                variant="outlined"
                size="small"
                disabled={pickup.status === "Completed"}
              >
                Confirm
              </Button>
              <Button variant="contained" size="small">
                Reschedule
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      </div>
    </Box>
  );
};

export default page;
