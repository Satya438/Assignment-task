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

const Navbar = () => {
  const data = [20, 30, 30, 25, 30, 30, 25, 35, 45, 40];
  const shapeStyles = { bgcolor: "success.main", width: 16, height: 16 };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="dashboard">
        <div className="top-nav" variant="outlined">
          <img alt="" className="title-img" src={logo} />
          <input className="search-input" />
          <div style={{ width: "55px", marginLeft: "25px", marginTop: "15px" }}>
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
                      Contacts
                    </Button>
                  </Typography>
                </div>
              </Toolbar>
            </div>
            <div class="col-10" className="container">
              <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <div
                  class="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    direction: "row",
                    marginTop: "40px",
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
                                  justifyContent: "space-between",
                                  marginTop: "10PX",
                                }}
                              >
                                <div
                                  class="col-8"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    fontSize: "18PX",
                                    fontWeight: "600",
                                  }}
                                >
                                  Checking account
                                </div>
                                {/* <div >
                                  <Box sx={{ minWidth: 60 }}>
                                    <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">
                                        Age
                                      </InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                      >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </div>
                                <div>
                                  <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">
                                        Age
                                      </InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                      >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                </div> */}
                                <div
                                  class="row"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "545px",
                                    height: "280px",
                                    marginTop: "25px",
                                  }}
                                >
                                  <LineChart data={data} />
                                </div>
                              </div>
                            </Grid>
                          </Typography>
                        </div>
                        <Divider />
                      </Paper>
                    </Grid>
                  </div>
                  <div class="col-1"></div>
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
                                class="col-10"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                  marginTop: "10PX",
                                  height: "305px",
                                }}
                              >
                                <div
                                  class="col-8"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    fontSize: "16PX",
                                  }}
                                >
                                  Invoice Owned To you
                                  <div
                                    class="row"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "565px",
                                      marginTop: "25px",
                                    }}
                                  >
                                    <BarChart />
                                  </div>
                                </div>
                                <div class="col-1"></div>
                                {/* <div class="col-1">
                                  <Select placeholder="Manage">
                                    <Option>Ten</Option>
                                    <Option>Twenty</Option>
                                    <Option>Thirty</Option>
                                  </Select>
                                </div> */}
                                {/* <div class="col-4">
                                  <Select label="Manage">
                                    <Option>Ten</Option>
                                    <Option>Twenty</Option>
                                    <Option>Thirty</Option>
                                  </Select>
                                </div> */}
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
                    // marginLeft: "38px",
                  }}
                >
                  <div class="col-1"></div>
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
                                class="col-6"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                  height: "305px",
                                }}
                              >
                                <div class="col-4 card-1-text">
                                  Total Cash Flow
                                  <div
                                    class="row card-3"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "515px",
                                      marginTop: "25px",
                                    }}
                                  >
                                    <BarChart />
                                  </div>
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

                                {/* <div class="col-1">
                                  <Select placeholder="Manage">
                                    <Option>Ten</Option>
                                    <Option>Twenty</Option>
                                    <Option>Thirty</Option>
                                  </Select>
                                </div> */}
                                {/* <div class="col-4">
                                  <Select label="Manage">
                                    <Option>Ten</Option>
                                    <Option>Twenty</Option>
                                    <Option>Thirty</Option>
                                  </Select>
                                </div> */}
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
                                class="col-12"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                  marginTop: "10PX",
                                  height: "295px",
                                }}
                              >
                                <div
                                  class="col-8"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    fontSize: "16PX",
                                  }}
                                >
                                  Account Watchlist
                                  <div
                                    class="row card-4"
                                    style={{
                                      width: "595px",
                                      marginTop: "25px",
                                    }}
                                  >
                                    <Orders className="order-table" />
                                  </div>
                                </div>
                                <div class="col-1"></div>
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
