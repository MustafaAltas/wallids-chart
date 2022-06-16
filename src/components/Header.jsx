import React from "react";
import Grid from "@mui/material/Grid";
import HeaderImage from "../assets/vallids.jpg";
import {
  Avatar,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style/header.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
function Header() {
  return (
    <div>
      <div className="header">
        <Grid
          container
          rowSpacing={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <img src={HeaderImage} alt="" width="150px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, maxWidth: "500" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="All Apps Search"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="header-right">
              <Button variant="contained" sx={{ maxWidth: "10rem" }}>
                Enterprise
              </Button>
              <div className="header-right-icon">
                <MailOutlineIcon color="primary" />
              </div>
              <div className="header-right-profile">
                <Avatar alt="i" src="#" sx={{ width: 56, height: 56 }} />
                <div className="header-right-profile-info">
                  <h5>İhsan Alptuğ Özbek</h5>
                  <p>Siber Güvenlik Uzmanı</p>
                </div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="navbar">
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="navbar-left">
              <div className="navbar-left-div letf-1">
                <DashboardOutlinedIcon />
                <h5>Dashboard</h5>
              </div>
              <div className="navbar-left-div letf-2">
                <AutoGraphIcon />
                <h5>Security Activity</h5>
              </div>
              <div className="navbar-left-div letf-3">
                <SettingsIcon />
                <h5>Settings</h5>
              </div>
              <div className="navbar-left-div letf-4">
                <HelpOutlineIcon />
                <h5>Supports</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="navbar-right">
              <div className="navbar-right-div">
                <ViewComfyIcon />
                All Apps
              </div>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
                sx={{ m: 1, minWidth: 200 }}
                defaultValue={10}
              >
                <MenuItem value={10}>domainname.com</MenuItem>
                <MenuItem value={20}>domainname1.com</MenuItem>
                <MenuItem value={30}>domainname2.com</MenuItem>
              </Select>
              <Button variant="contained" >
                Check My Service
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
