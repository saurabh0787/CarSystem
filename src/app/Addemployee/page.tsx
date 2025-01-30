 
"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  Switch,
  Typography,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import "./page.css";
import Sidebar from "../Dashboard/Sidebar/page";

function Page() {
  const [systemAccess, setSystemAccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    status: false,
    accessLevel: "Standard User",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Reset error for the field when it changes
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateFields = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[A-Z]+$/;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First Name must contain only uppercase letters.";
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last Name must contain only uppercase letters.";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (!formData.department) {
      newErrors.department = "Please select a department.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSave = () => {
    if (validateFields()) {
      alert("Employee details saved!");
      console.log(formData, "formData");
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      status: false,
      accessLevel: "Standard User",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
    });
  };

  return (
    <div className="container">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="container-main">
        <Typography variant="h5" className="header">
          Add Employee
        </Typography>
        <Divider className="divider" />

        {/* Upload Photo */}
        <Box className="photoSection">
          <Avatar className="avatar" sx={{ height: "120px", width: "120px" }}>
            Upload
          </Avatar>
          <Button
            variant="contained"
            component="label"
            className="uploadButton"
          >
            Upload Photo
            <input type="file" hidden />
          </Button>
        </Box>

        {/* Add Employee Form */}
        <div className="formSection">
          <Box className="formRow">
            <TextField
              fullWidth
              required
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              fullWidth
              required
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Box>

          <Box className="formRow">
            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              fullWidth
              required
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                // ony numeric digit
                if (/^\d*$/.test(value)) {
                  handleChange("phone", value);
                }
              }}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Box>

          <Box className="formRow">
            <Select
              fullWidth
              required
              value={formData.department} 
            
              onChange={(e) => handleChange("department", e.target.value)}
              displayEmpty
              error={!!errors.department}
            >
              <MenuItem value="" disabled>
                Select Department
              </MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Product">Product</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
            </Select>
            {errors.department && (
              <Typography color="error" variant="caption">
                {errors.department}
              </Typography>
            )}
            <Box className="statusContainer">
              <Typography>Status</Typography>
              <Switch
                checked={formData.status}
                onChange={(e) => handleChange("status", e.target.checked)}
              />
            </Box>
          </Box>
        </div>

        <div className="formSection">
          <Typography variant="h6" marginBottom={2}>
            System Access
          </Typography>
          <Box className="statusContainer" marginBottom={2}>
            <Switch
              checked={systemAccess}
              onChange={(e) => setSystemAccess(e.target.checked)}
            />
            <Typography>Enable System Access</Typography>
          </Box>
          {systemAccess && (
            <Select
              fullWidth
              value={formData.accessLevel}
              onChange={(e) => handleChange("accessLevel", e.target.value)}
            >
              <MenuItem value="Standard User">Standard User</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          )}
        </div>

        {/* Action Buttons */}
        <Box className="buttons">
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Employee
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Page;
