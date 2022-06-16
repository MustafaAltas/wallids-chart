import React from "react";
import Grid from "@mui/material/Grid";
import HeaderImage from "../assets/vallids.jpg";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style/header.css"

function Header() {
  return (
    <div>
      <div className="header">
        <Grid container rowSpacing={1}>
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
          <Grid item xs={12} sm={6} md={4}>
            <div className="header-right">
              <Button variant="contained">Enterprise</Button>
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
          <Grid item xs={12} sm={6} md={6}>
            Mustafa4
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            Mustafa5
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
