import React from "react";
import LogoImg from "../imgMy/logo.svg";
import "./navbar.css";
import Avatar from "@mui/material/Avatar";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MemoryIcon from "@mui/icons-material/Memory";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DashboardsTabs from "../Tabs/DshboardsTabs";
import TemplatesTabs from "../Tabs/TemplatesTabs";
import ListViewsTabs from "../Tabs/ListViewsTabs";
import GridViewsTabs from "../Tabs/GridViewsTabs";
import PagesTabs from "../Tabs/PagesTabs";
import UtilityTabs from "../Tabs/UtilityTabs";
import BasicUiTabs from "../Tabs/BasicUiTabs";
import FormControlsTabs from "../Tabs/FormControlsTabs";
import UiComponentsTabs from "../Tabs/UiComponentsTabs";
import JsPluginsTabs from "../Tabs/JsPluginsTabs";
import Home from '../component/Home';
import Chat from "../component/Chat";
import Search from "../component/Search";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  // popup
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  // tabs
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);

  //  tabs
  const handleChange1 = (event1, newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (event2, newValue2) => {
    setValue2(newValue2);
  };
  const handleChange3 = (event3, newValue3) => {
    setValue3(newValue3);
  };
  const handleChange4 = (event4, newValue4) => {
    setValue4(newValue4);
  };

  // popup
  const handleClick1 = () => {
    setOpen1((prev) => !prev);
  };
  const handleClickAway1 = () => {
    setOpen1(false);
  };
  const handleClick2 = () => {
    setOpen2((prev) => !prev);
  };
  const handleClickAway2 = () => {
    setOpen2(false);
  };
  const handleClick3 = () => {
    setOpen3((prev) => !prev);
  };
  const handleClickAway3 = () => {
    setOpen3(false);
  };
  const handleClick4 = () => {
    setOpen4((prev) => !prev);
  };
  const handleClickAway4 = () => {
    setOpen4(false);
  };

  // popup
  const styles = {
    position: "absolute",
    top: 40,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: "350%",
    margin: "auto",
    border: "3px solid green",
    padding: "10px",
  };




  return (
    <>
      <div className="navbarMain">
        <div className="navbarA">
          <img src={LogoImg} alt="" className="navbarAImg" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            id="navbarAAvatar"
          />
          <h2>Onboarding</h2>
        </div>

        <div className="navbarB">
          <div className="navbarBb">
            <ClickAwayListener onClickAway={handleClickAway1}>
              <Box sx={{ position: "relative" }}>
                <Button type="button" variant="outlined" onClick={handleClick1}>
                  <ShowChartIcon /> DASHBOARDS
                </Button>
                {open1 ? (
                  <Box sx={styles}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          margin: "auto",
                          width: "50%",
                          padding: "10px",
                        }}
                      >
                        <Tabs
                          value={value1}
                          onChange={handleChange1}
                          aria-label="basic tabs example"
                        >
                          <Tab label="DASHBOARDS" {...a11yProps(0)} />
                          <Tab label="tEMPLATES" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value1} index={0}>
                        Item One
                        <DashboardsTabs />
                      </TabPanel>
                      <TabPanel value={value1} index={1}>
                        Item Two
                        <TemplatesTabs />
                      </TabPanel>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>

          <div className="navbarBb">
            <ClickAwayListener onClickAway={handleClickAway2}>
              <Box sx={{ position: "relative" }}>
                <Button type="button" variant="outlined" onClick={handleClick2}>
                  <GridViewIcon /> LAYOUTS
                </Button>
                {open2 ? (
                  <Box sx={styles}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          margin: "auto",
                          width: "100%",
                          padding: "10px",
                        }}
                      >
                        <Tabs
                          value={value2}
                          onChange={handleChange2}
                          aria-label="basic tabs example"
                        >
                          <Tab label="LIST VIEWS" {...a11yProps(0)} />
                          <Tab label="GRID VIEWS" {...a11yProps(1)} />
                          <Tab label="PAGES" {...a11yProps(2)} />
                          <Tab label="UTILITY" {...a11yProps(3)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value2} index={0}>
                        Item One
                        <ListViewsTabs />
                      </TabPanel>
                      <TabPanel value={value2} index={1}>
                        Item Two
                        <GridViewsTabs />
                      </TabPanel>
                      <TabPanel value={value2} index={2}>
                        Item Three
                        <PagesTabs />
                      </TabPanel>
                      <TabPanel value={value2} index={3}>
                        Item Three
                        <UtilityTabs />
                      </TabPanel>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>

          <div className="navbarBb">
            <ClickAwayListener onClickAway={handleClickAway3}>
              <Box sx={{ position: "relative" }}>
                <Button type="button" variant="outlined" onClick={handleClick3}>
                  <ViewInArIcon /> ELEMENTS
                </Button>
                {open3 ? (
                  <Box sx={styles}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          margin: "auto",
                          width: "55%",
                          padding: "10px",
                        }}
                      >
                        <Tabs
                          value={value3}
                          onChange={handleChange3}
                          aria-label="basic tabs example"
                        >
                          <Tab label="BASIC UI" {...a11yProps(0)} />
                          <Tab label="FORM CONTROLS" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value3} index={0}>
                        Item One
                        <BasicUiTabs />
                      </TabPanel>
                      <TabPanel value={value3} index={1}>
                        Item Two
                        <FormControlsTabs />
                      </TabPanel>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>

          <div className="navbarBb">
            <ClickAwayListener onClickAway={handleClickAway4}>
              <Box sx={{ position: "relative" }}>
                <Button type="button" variant="outlined" onClick={handleClick4}>
                  <MemoryIcon /> COMPONENTS
                </Button>
                {open4 ? (
                  <Box sx={styles}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          margin: "auto",
                          width: "50%",
                          padding: "10px",
                        }}
                      >
                        <Tabs
                          value={value4}
                          onChange={handleChange4}
                          aria-label="basic tabs example"
                        >
                          <Tab label="UI COMPONENTS" {...a11yProps(0)} />
                          <Tab label="JS PLUGINS" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value4} index={0}>
                        Item One
                        <UiComponentsTabs />
                      </TabPanel>
                      <TabPanel value={value4} index={1}>
                        Item Two
                        <JsPluginsTabs />
                      </TabPanel>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>

          <div className="navbarBb">
            <Button variant="outlined">
              <ChatBubbleOutlineIcon /> CHAT
            </Button>
          </div>
          <div className="navbarBb">
            <Button variant="outlined">
              <SearchIcon /> SEARCH
            </Button>
          </div>
        </div>

        <div className="navbarC">
          <div className="navbarCa">
            <LightModeIcon id="navbarCaSun" />
          </div>
          <div className="navbarCa">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              id="navbarCaCountry"
            />
          </div>
          <div className="navbarCa">
            <NotificationsOutlinedIcon id="navbarCaNotification" />{" "}
          </div>
          <div className="navbarCa">
            <GridViewIcon id="navbarCaGrid" />
          </div>
          <div className="navbarCa">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              id="navbarCaAvatar"
            />
          </div>
        </div>
      </div>

     


      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Chat" element={<Chat/>} />
          <Route path="/Search" element={<Search/>} />
          {/* <Route path="/" element={} /> */}
      </Routes>
      </Router> 



    </>
  );
}
