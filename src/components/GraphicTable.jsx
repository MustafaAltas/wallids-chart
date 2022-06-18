import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./style/graphictable.css";
import { BiGitPullRequest } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { GrInsecure } from "react-icons/gr";

function GraphicTable() {
  return (
    <div className="grap">
      <div className="grap-cart-first">
        <div className="grap-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
        <BarChartIcon />
      </div>

      <div className="grap-cart-second">
        <div className="grap-cart-second-first">
          <div>
            <BiGitPullRequest />
            <div>
              <h5>150K</h5>
              <p>Request</p>
            </div>
          </div>
          <div>
            <GrSecure />
            <div>
              <h5>80K</h5>
              <p>Secure</p>
            </div>
          </div>
          <div>
            <GrInsecure />
            <div>
              <h5>70K</h5>
              <p>Insecure</p>
            </div>
          </div>
        </div>
        <div className="grap-cart-second-second">
          <select>
            <option selected>Last 24 Hours</option>
            <option >Last 1 Week</option>
            <option >Last 1 Month</option>
            <option >Last 1 Year</option>
          </select>
        </div>
      </div>

      <div></div>

      <div></div>
    </div>
  );
}

export default GraphicTable;
