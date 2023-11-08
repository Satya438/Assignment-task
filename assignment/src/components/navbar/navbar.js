import React, { useContext } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../navbar/navbar.css";
import logo from "../../../src/assets/Assiduus_Global_Logo.jpeg";
import LineChart from "../../pages/Linechart/Linechart";
import BarChart from "../../pages/Barchart/barchart";
import Orders from "../../pages/Table/table";

const Navbar = () => {
  const data = [10, 20, 22, 25, 15, 30, 25, 35, 45, 40];
  const shapeStyles = { bgcolor: "success.main", width: 16, height: 16 };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  return (
    <>
      <div className="dashboard">
        <div className="top-nav" variant="outlined">
          <img alt="" className="title-img" src={logo} />
          <input className="search-input" />
        </div>
        <div>
          <div
            class="col-12"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div class="col-2" className="sidebar">
              <Toolbar>
                <div
                  class="row"
                  style={{ marginTop: "25px", marginLeft: "95px" }}
                >
                  <Typography>
                    <Button>Dashboard</Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button>Accounts</Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button>Payroll</Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button>Reports</Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button>Advisor</Button>
                  </Typography>
                  <br />
                  <Typography>
                    <Button>Contacts</Button>
                  </Typography>
                </div>
              </Toolbar>
            </div>
            <div
              class="col-10"
              className="container"
              style={{
                marginLeft: "75px",
                background: "rgb(236, 235, 235)",
                width: "90vw",
                height: "88.25vh",
              }}
            >
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
                  <div class="col-1"></div>
                  <div class="col-4">
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
                                  Checking account
                                  <div
                                    class="row"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "565px",
                                      marginTop: "25px",
                                    }}
                                  >
                                    <LineChart data={data} />
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
                                class="col-12"
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
                                class="col-12"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  direction: "row",
                                  height: "305px",
                                }}
                              >
                                <div class="col-6 card-1-text">
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
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
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
                                    justifyContent: "space-between",
                                    gap: 5,
                                  }}
                                >
                                  {rectangle}
                                  Out
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
