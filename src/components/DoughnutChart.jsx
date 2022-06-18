import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import Button from "@mui/material/Button";
import "./style/doughnutchart.css";
ChartJS.register(ArcElement, Tooltip, Legend);
function DoughnutChart() {
  const data = {
    // labels: ["white", "blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [262000, 238000],
        backgroundColor: ["blue", "white"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="doughnut-cart">
      <div className="doughnut-cart-first">
        <div className="doughnut-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
        <BarChartIcon />
      </div>
      <div className="doughnut-cart-last">
        <div className="doughnut-cart-last-prim">
          <Doughnut data={data} />
        </div>
        <div>
          <p>262.000/500.000</p>
          <Button variant="contained" sx={{ maxWidth: "10rem" }}>
            Enterprise
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
