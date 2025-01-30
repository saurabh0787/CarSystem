"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
// import Addemployee from '../Addemployee/page';
import "./page.css";
// import { useRouter } from "next/navigation";

const employees = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234-567-8901",
    department: "Engineering",
    workday: "16/2 10:00 - 16:30",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 234-567-8902",
    department: "Product",
    workday: "16/2 09:00 - 17:30",
    status: "Active",
  },
  {
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "+1 234-567-8903",
    department: "Design",
    workday: "-",
    status: "Inactive",
  },
];

// Styled components for the search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  maxWidth: 400,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Page() {
  const [searchText, setSearchText] = useState("");

  // Filter employees based on search text
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  // const route=useRouter()
  return (
    <div
      className="Page-container"
      style={{ display: "flex", height: "100vh", width: "85vw" }}
    >
      {/* Main Content */}
      <div
        className="Employee-main-div"
        style={{ flexGrow: 1, padding: "20px" }}
      >
        <div className="Employee-headin">
          <h1>Employee List</h1>
          <p>
            A comprehensive list of all employees including their details,
            positions, and current status.
          </p>
        </div>
        <div
          className="Employee-search"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search employees…"
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Search>
          {/* Correct usage of Link */}
          <Link href="/Addemployee" passHref>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "none", fontWeight: "bold" }}
            >
              + Add Employee
            </Button>
          </Link>
        </div>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Workday</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.workday}</TableCell>
                  <TableCell>
                    <Chip
                      label={employee.status}
                      color={employee.status === "Active" ? "success" : "error"}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      Edit
                    </Button>
                    <Button variant="text" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          className="Page-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <p style={{ color: "#666" }}>Showing 1 to 6 of 15 results</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
