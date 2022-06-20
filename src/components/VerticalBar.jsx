import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./style/verticalbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "SQL İnjection",
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: "blue",
    },
    {
      label: "XSS İnjection",
      data: [700, 600, 500, 400, 300, 200, 100],
      backgroundColor: "yellow",
    },
  ],
};

function VerticalBar() {
  return (
    <div className="vertical">
      <div className="vertical-cart-first">
        <div className="vertical-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
        <BarChartIcon />
      </div>

      <div className="vertical-cart-second">
        <div className="vertical-cart-second-first">
          <div className="vertical-cart-second-first-div sql">
            <div>
              <h5>150K</h5>
              <p>SQL injection</p>
            </div>
            <KeyboardArrowDownIcon />
          </div>
          <div className="vertical-cart-second-first-div xss">
            <div>
              <h5>80K</h5>
              <p>XSS injection</p>
            </div>
            <KeyboardArrowDownIcon />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddBoxOutlinedIcon />
            <p>Add Compare</p>
          </div>

        </div>
        <div >
            <Bar data={data} />;
          </div>
      </div>

      <div></div>
    </div>
  );
}

export default VerticalBar;
