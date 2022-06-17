import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button } from "@mui/material";
import "./style/statuscard.css";

function StatusCard() {
  return (
    <div className="status-cart">
      <div className="status-cart-first">
        <div className="status-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
      </div>
      <div className="status-cart-last">
        <div className="status-cart-last-prim">
            Active
        </div>
        <div>
          <Button variant="contained" sx={{ maxWidth: "10rem",fontSize:"10px" }}>
            Check All Page Status
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
