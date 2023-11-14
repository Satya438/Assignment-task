import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import "../navbar/navbar.css";
import logo from "../../../src/assets/Assiduus_Global_Logo.jpeg";
import LineChart from "../../pages/Linechart/Linechart";
import BarChart from "../../pages/Barchart/barchart";
import Orders from "../../pages/Table/table";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  const data = [20, 70, 10, 40, 0, 25];
  const shapeStyles = { bgcolor: "success.main", width: 16, height: 16 };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const [age, setAge] = React.useState("");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="dashboard">
        <div className="top-nav" variant="outlined">
          <img alt="" className="title-img" src={logo} />
          <input className="search-input" />
          <div className="notigfication-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64px"
              height="144px"
              fill="none"
              id="notification"
            >
              <path
                fill="#000"
                d="M12 3a2 2 0 0 0-2 2v.341C7.67 6.165 6 8.388 6 11v5H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1v-5a6.002 6.002 0 0 0-4-5.659V5a2 2 0 0 0-2-2zm0 18a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z"
              ></path>
            </svg>
          </div>
          <div className="profile-pic">
            <svg
              enable-background="new -27 24 100 100"
              height="35px"
              id="female1"
              version="1.1"
              viewBox="-27 24 100 100"
              width="35px"
            >
              <g>
                <g>
                  <circle cx="23" cy="74" fill="#F5EEE5" r="50" />
                  <g>
                    <defs>
                      <circle cx="23" cy="74" id="SVGID_1_" r="50" />
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use overflow="visible" />
                    </clipPath>
                    <rect
                      clip-path="url(#SVGID_2_)"
                      fill="#D98C21"
                      height="43"
                      width="31"
                      x="-3"
                      y="65"
                    />
                    <rect
                      clip-path="url(#SVGID_2_)"
                      fill="#CC751F"
                      height="47"
                      width="31"
                      x="18"
                      y="61"
                    />
                    <path
                      clip-path="url(#SVGID_2_)"
                      d="M36,95.9c0,4,4.7,5.2,7.1,5.8c7.6,2,22.8,5.9,22.8,5.9      c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8c1.3-3.1,3.9-5.5,7.1-6.6c0,0,15.2-3.9,22.8-5.9c2.4-0.6,7.1-1.8,7.1-5.8      c0-4,0-10.9,0-10.9h26C36,85,36,91.9,36,95.9z"
                      fill="#E6C19C"
                    />
                    <g clip-path="url(#SVGID_2_)">
                      <defs>
                        <path
                          d="M36,95.9c0,4,4.7,5.2,7.1,5.8c7.6,2,22.8,5.9,22.8,5.9c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8        c1.3-3.1,3.9-5.5,7.1-6.6c0,0,15.2-3.9,22.8-5.9c2.4-0.6,7.1-1.8,7.1-5.8c0-4,0-10.9,0-10.9h26C36,85,36,91.9,36,95.9z"
                          id="SVGID_3_"
                        />
                      </defs>
                      <clipPath id="SVGID_4_">
                        <use overflow="visible" />
                      </clipPath>
                      <path
                        clip-path="url(#SVGID_4_)"
                        d="M23.2,35l0.2,0l0,0c3.3,0,8.2,0.2,11.4,2c3.3,1.9,7.3,5.6,8.5,12.1       c2.4,13.7-2.1,35.4-6.3,42.4c-4,6.7-9.8,9.2-13.5,9.4l-0.1,0l-0.2,0l-0.2,0l-0.1,0c-3.7-0.2-9.5-2.7-13.5-9.4       c-4.2-7-8.7-28.7-6.3-42.4c1.2-6.5,5.2-10.2,8.5-12.1c3.2-1.8,8.1-2,11.4-2l0,0L23.2,35z"
                        fill="#D4B08C"
                      />
                      <path
                        clip-path="url(#SVGID_4_)"
                        d="M-27,82H73v42H-27V82z M23,113c12.1,0,20.8-14.1,20.8-14.1S33.9,83,23,83       S2.2,98.9,2.2,98.9S10.9,113,23,113z"
                        fill="#6B363E"
                      />
                      <g clip-path="url(#SVGID_4_)">
                        <defs>
                          <path
                            d="M-27,82H73v42H-27V82z M23,113c12.1,0,20.8-14.1,20.8-14.1S33.9,83,23,83S2.2,98.9,2.2,98.9         S10.9,113,23,113z"
                            id="SVGID_5_"
                          />
                        </defs>
                        <clipPath id="SVGID_6_">
                          <use overflow="visible" />
                        </clipPath>
                        <path
                          clip-path="url(#SVGID_6_)"
                          d="M45.4,101.7c-1.3,10-9.3,17.3-9.3,17.3s-8.2-7-10.2-7.6        c12.7-7.6,17.1-12,17.1-12S46.6,91.7,45.4,101.7z M0.7,101.7C2,111.8,10,119,10,119s8.2-7,10.2-7.6c-12.7-7.6-17.1-12-17.1-12        S-0.5,91.7,0.7,101.7z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    d="M23,40c19.1,0,20.7,13.8,20.8,15.1c1.1,11.9-3,28.1-6.8,33.7c-4,5.9-9.8,8.1-13.5,8.3c-0.2,0-0.2,0-0.3,0     L23,97c-3.8-0.2-9.6-2.4-13.6-8.3c-3.8-5.6-7.9-21.8-6.8-33.8C2.7,53.7,3.9,40,23,40z"
                    fill="#F2CEA5"
                  />
                  <path
                    d="M18.8,85c-0.2,0-0.4,0.4-0.3,0.7c0.9,2.1,2.3,3.3,4.2,3.4c2,0.2,4.1-1.2,5.2-3.4c0.1-0.3,0-0.7-0.3-0.7     L18.8,85z"
                    fill="#A3705F"
                  />
                  <circle cx="32" cy="69" fill="#262626" r="2" />
                  <circle cx="14" cy="69" fill="#262626" r="2" />
                  <path
                    d="M8.5,64.2c0,0,1.4-1.2,4.9-1.2c2.5,0,4.9,0.7,6.4,2.6"
                    fill="none"
                    stroke="#CC9872"
                    stroke-width="2"
                  />
                  <path
                    d="M37.4,64.2c0,0-1.4-1.2-4.9-1.2s-6.9,1.5-7.7,5.7s0.3,7.7,2.1,10.1"
                    fill="none"
                    stroke="#BB8660"
                    stroke-width="2"
                  />
                  <path
                    d="M-3,69.3c2.4-0.9,7.2-3.5,12-11.9c6.8-12,17.2-6.5,20.5-2.6c0.4,0.4,0.9,0.2,0.9,0.2s8.6-3.7,12,3.8     c2.5,5.5,3.9,7.1,6.5,8.8v-7.9C49,44.2,39.5,44,39.1,44s-0.7,0-0.9-0.6C37.3,40.5,28,30.9,12.4,37S-3,65-3,65V69.3z"
                    fill="#E6A422"
                  />
                  <g>
                    <defs>
                      <path
                        d="M-3,69.3c2.4-0.9,7.2-3.5,12-11.9c6.8-12,17.2-6.5,20.5-2.6c0.4,0.4,0.9,0.2,0.9,0.2s8.6-3.7,12,3.8       c2.5,5.5,3.9,7.1,6.5,8.8v-7.9C49,44.2,39.5,44,39.1,44s-0.7,0-0.9-0.6C37.3,40.5,28,30.9,12.4,37S-3,65-3,65V69.3z"
                        id="SVGID_7_"
                      />
                    </defs>
                    <clipPath id="SVGID_8_">
                      <use overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#SVGID_8_)"
                      d="M29.8,55.6c0,0,3-7.5,9-12.1S50,50.9,50,50.9l0.3,19.6L29.8,55.6z"
                      fill="#D98C21"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div class="col-2" className="sidebar">
              <Toolbar>
                <div class="row">
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Dashboard")}
                      style={{
                        backgroundColor:
                          selectedButton === "Dashboard" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        height="22"
                        viewBox="0 0 48 48"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h48v48h-48z" fill="none" />
                        <path d="M6 26h16v-20h-16v20zm0 16h16v-12h-16v12zm20 0h16v-20h-16v20zm0-36v12h16v-12h-16z" />
                      </svg>
                      Dashboard
                    </Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Accounts")}
                      style={{
                        backgroundColor:
                          selectedButton === "Accounts" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        enable-background="new 0 0 500 500"
                        height="28px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 500 500"
                        width="28px"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M31.949,413.539c0,20.079,16.264,36.341,36.34,36.341h327.077  c20.078,0,36.345-16.262,36.345-36.341v-54.513h16.35c11.084,0,19.99-8.906,19.99-19.991v-96.302c0-11.08-8.906-19.989-19.99-19.989  h-16.35v-54.513c0-20.079-16.267-36.342-36.345-36.342H95.548c-9.992,0-18.173-8.181-18.173-18.17c0-9.992,8.181-18.17,18.173-18.17  h268.021c12.535,0,22.715-10.179,22.715-22.716c0-12.536-10.18-22.713-22.715-22.713H68.29c-20.077,0-36.34,16.264-36.34,36.343  V413.539z M340.853,290.884c0-12.535,10.18-22.711,22.717-22.711c12.535,0,22.715,10.176,22.715,22.711  c0,12.537-10.18,22.716-22.715,22.716C351.032,313.6,340.853,303.421,340.853,290.884z"
                          fill="#010101"
                          fill-rule="evenodd"
                        />
                      </svg>
                      Accounts
                    </Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Payroll")}
                      style={{
                        backgroundColor:
                          selectedButton === "Payroll" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        enable-background="new 0 0 48 48"
                        height="24px"
                        id="Layer_4"
                        version="1.1"
                        viewBox="0 0 48 48"
                        width="24px"
                      >
                        <path d="M34.945,28.107c-0.589-1.23-1.517-2.334-2.78-3.312c-1.264-0.977-3.253-2.031-5.966-3.16  c-2.41-0.994-4.079-1.795-5.005-2.401c-0.927-0.607-1.593-1.251-1.997-1.934c-0.404-0.683-0.607-1.505-0.607-2.465  c0-1.399,0.506-2.524,1.517-3.375c1.012-0.851,2.495-1.277,4.449-1.277c2.579,0,5.512,0.691,8.798,2.073l1.921-4.93  c-2.727-1.206-5.465-1.937-8.212-2.205V0H22v5.182c-2.45,0.339-4.49,1.162-6.115,2.475c-2.19,1.769-3.286,4.196-3.286,7.28  c0,2.46,0.69,4.567,2.072,6.32c1.382,1.753,3.758,3.312,7.129,4.676c3.27,1.314,5.427,2.453,6.471,3.414  c1.046,0.961,1.568,2.131,1.568,3.514c0,1.533-0.569,2.754-1.707,3.664c-1.138,0.912-2.902,1.365-5.296,1.365  c-1.635,0-3.4-0.227-5.296-0.682s-3.687-1.078-5.372-1.871v5.713c2.569,1.253,5.851,1.895,9.831,1.938V48h5.062v-5.471  c2.051-0.451,3.79-1.226,5.203-2.338c2.377-1.871,3.565-4.449,3.565-7.736C35.831,30.789,35.535,29.338,34.945,28.107z" />
                      </svg>
                      Payroll
                    </Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Reports")}
                      style={{
                        backgroundColor:
                          selectedButton === "Reports" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        enable-background="new 0 0 48 48"
                        height="24px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 48 48"
                        width="24px"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M37,47H11c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18.973  c0.002,0,0.005,0,0.007,0h0.02H30c0.32,0,0.593,0.161,0.776,0.395l9.829,9.829C40.84,11.407,41,11.68,41,12l0,0v0.021  c0,0.002,0,0.003,0,0.005V43C41,45.209,39.209,47,37,47z M31,4.381V11h6.619L31,4.381z M39,13h-9c-0.553,0-1-0.448-1-1V3H11  C9.896,3,9,3.896,9,5v38c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V13z M33,39H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18  c0.553,0,1,0.448,1,1C34,38.553,33.553,39,33,39z M33,31H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  C34,30.553,33.553,31,33,31z M33,23H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1C34,22.553,33.553,23,33,23  z"
                          fill-rule="evenodd"
                        />
                      </svg>
                      Reports
                    </Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Advisor")}
                      style={{
                        backgroundColor:
                          selectedButton === "Advisor" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        enable-background="new 0 0 50 50"
                        height="24px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 50 50"
                        width="24px"
                      >
                        <rect fill="none" height="50" width="50" />
                        <path d="M30.933,32.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z" />
                      </svg>
                      Advisor
                    </Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button
                      onClick={() => handleButtonClick("Contacts")}
                      style={{
                        backgroundColor:
                          selectedButton === "Contacts" ? "green" : "inherit",
                      }}
                    >
                      <svg
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h48v48H0zm0 0h48v48H0zm0 0h48v48H0z"
                          fill="none"
                        />
                        <path d="M40 0H8v4h32V0zM8 48h32v-4H8v4zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-16 5.5c2.48 0 4.5 2.02 4.5 4.5 0 2.49-2.02 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5zM34 34H14v-3c0-3.33 6.67-5 10-5s10 1.67 10 5v3z" />
                      </svg>
                      Contacts
                    </Button>
                  </Typography>
                </div>
              </Toolbar>
            </div>
            <div className="container">
              <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <div
                  class="col"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    direction: "row",
                  }}
                >
                  <div>
                    <Grid item xs={8} md={7} lg={7}>
                      <Paper
                        sx={{
                          p: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <Typography
                            component="h1"
                            variant="h6"
                            fontSize={14}
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                          >
                            <Grid item xs={6} md={2} lg={2}>
                              <div
                                class="row"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  marginTop: "10px",
                                }}
                              >
                                <div className="card-1-text">
                                  Checking account
                                </div>
                                <div className="dropdown-1">
                                  <Box sx={{ minWidth: 80, minHeight: 10 }}>
                                    <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">
                                        Manage
                                      </InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                      >
                                        <MenuItem value={10}>Accept</MenuItem>
                                        <MenuItem value={20}>Edit</MenuItem>
                                        <MenuItem value={30}>Delete</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </div>
                                <div className="dropdown-2">
                                  <Box sx={{ minWidth: 110, minHeight: 10 }}>
                                    <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">
                                        January
                                      </InputLabel>
                                      <Select
                                        labelId="month-select-label"
                                        id="month-select"
                                        value={selectedMonth}
                                        label="Select Month"
                                        onChange={handleMonthChange}
                                      >
                                        <MenuItem value={10}>January</MenuItem>
                                        <MenuItem value={20}>
                                          Febrauary
                                        </MenuItem>
                                        <MenuItem value={30}>March</MenuItem>
                                        <MenuItem value={10}>April</MenuItem>
                                        <MenuItem value={20}>May</MenuItem>
                                        <MenuItem value={30}>June</MenuItem>
                                        <MenuItem value={10}>July</MenuItem>
                                        <MenuItem value={20}>August</MenuItem>
                                        <MenuItem value={30}>
                                          September
                                        </MenuItem>
                                        <MenuItem value={10}>October</MenuItem>
                                        <MenuItem value={20}>November</MenuItem>
                                        <MenuItem value={30}>
                                          Decenmber
                                        </MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </div>
                              </div>
                              <Divider style={{ width: "545px" }} />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  direction: "row",
                                  marginTop: "25px",
                                }}
                              >
                                <LineChart className="linechart" data={data} />
                              </div>
                            </Grid>
                          </Typography>
                        </div>
                        <Divider />
                      </Paper>
                    </Grid>
                  </div>
                  <div class="col-4">
                    <Grid item xs={8} md={7} lg={7}>
                      <Paper
                        className="card-2"
                        sx={{
                          p: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <Typography
                            component="h1"
                            variant="h6"
                            fontSize={14}
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                          >
                            <Grid item xs={8} md={7} lg={7}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  direction: "row",
                                  // marginTop: "10PX",
                                }}
                              >
                                <div className="card-1-text">
                                  Invoice Owned To you
                                </div>
                                <div className="file-upload">
                                  <Button
                                    component="label"
                                    variant="outlined"
                                    color="success"
                                  >
                                    New Sales Invoice
                                    <VisuallyHiddenInput type="file" />
                                  </Button>
                                </div>
                              </div>
                              <Divider style={{ width: "545px" }} />
                              <div
                                class="row"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <BarChart />
                              </div>
                            </Grid>
                          </Typography>
                        </div>
                        <Divider />
                      </Paper>
                    </Grid>
                  </div>
                </div>
                <div
                  class="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    direction: "row",
                  }}
                >
                  <div class="col-4" style={{ marginTop: "30px" }}>
                    <Grid item xs={8} md={7} lg={7}>
                      <Paper
                        className="card-3"
                        sx={{
                          p: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <Typography
                            component="h1"
                            variant="h6"
                            fontSize={14}
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                          >
                            <Grid item xs={8} md={7} lg={7}>
                              <div
                                class="row"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                }}
                              >
                                <div className="card-1-text">
                                  Total Cash Flow
                                  <div className="badges">
                                    <div
                                      class="col-2"
                                      style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: 5,
                                      }}
                                    >
                                      {rectangle}
                                      In
                                    </div>
                                    <br />
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: 5,
                                      }}
                                    >
                                      {rectangle}
                                      Out
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider style={{ width: "545px" }} />
                              <div
                                class="row card-3"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <BarChart />
                              </div>
                            </Grid>
                          </Typography>
                        </div>
                        <Divider />
                      </Paper>
                    </Grid>
                  </div>
                  <div class="col-1"></div>
                  <div class="col-4" style={{ marginTop: "30px" }}>
                    <Grid item xs={8} md={7} lg={7}>
                      <Paper
                        sx={{
                          p: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <Typography
                            component="h1"
                            variant="h6"
                            fontSize={14}
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                          >
                            <Grid item xs={8} md={7} lg={7}>
                              <div
                                class="row"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                }}
                              >
                                <div className="card-1-text">
                                  Account Watchlist
                                </div>
                                <div class="col-1"></div>
                              </div>
                              <Divider style={{ width: "545px" }} />
                              <div class="row card-4">
                                <Orders className="order-table" />
                              </div>
                            </Grid>
                          </Typography>
                        </div>
                        <Divider />
                      </Paper>
                    </Grid>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
