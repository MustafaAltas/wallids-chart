import React, { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./style/graphictable.css";
import { BiGitPullRequest } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { GrInsecure } from "react-icons/gr";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import tableData from "../helper/Contains";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [
    "6am",
    "5am",
    "4am",
    "3am",
    "2am",
    "1am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
  ],
  datasets: [
    {
      label: "Request",
      data: [70, 85, 92, 34, 110, 31, 93, 98, 120, 101, 140, 99, 75],
      borderColor: "rgba(11, 131, 236, 0.951)",
    },
    {
      label: "Secure",
      data: [65, 80, 78, 50, 75, 95, 100, 65, 120, 35, 45, 96, 78],
      borderColor: "aqua",
    },
    {
      label: "İnsecure",
      data: [98, 75, 45, 60, 110, 101, 75, 98, 120, 105, 96, 99, 101],
      borderColor: "red",
    },
  ],
};
function GraphicTable() {
  const [forTable, setForTable] = useState();
  useEffect(() => {
    setForTable(tableData);
  }, []);

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
          <div className="grap-cart-second-first-div request">
            <BiGitPullRequest />
            <div>
              <h5>150K</h5>
              <p>Request</p>
            </div>
          </div>
          <div className="grap-cart-second-first-div secure">
            <GrSecure />
            <div>
              <h5>80K</h5>
              <p>Secure</p>
            </div>
          </div>
          <div className="grap-cart-second-first-div insecure">
            <GrInsecure />
            <div>
              <h5>70K</h5>
              <p>Insecure</p>
            </div>
          </div>
        </div>
        <div className="grap-cart-second-second">
          <select>
            <option>Last 24 Hours</option>
            <option>Last 1 Week</option>
            <option>Last 1 Month</option>
            <option>Last 1 Year</option>
          </select>
        </div>
      </div>

      <div>
        <Line data={data} />
      </div>

      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor:"RGB(220,220,220)"}}>
              <TableRow>
                <TableCell>TİME</TableCell>
                <TableCell align="right">DATE</TableCell>
                <TableCell align="right">ATTACK TYPE</TableCell>
                <TableCell align="right">SEVERİTY</TableCell>
                <TableCell align="right">COUNTRY</TableCell>
                <TableCell align="right">IP ADRESS</TableCell>
                <TableCell align="right">STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forTable?.map((item, index) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.time}
                    </TableCell>
                    <TableCell align="right">{item.date}</TableCell>
                    <TableCell align="right">{item.attackType}</TableCell>
                    <TableCell align="right" sx={{color:`${((item.severity === "Normal") || (item.severity === "Low"))  ? "aqua" : (item.severity === "High") ? "red" : "orange"}`}}>{item.severity}</TableCell>
                    <TableCell align="right">{item.country}</TableCell>
                    <TableCell align="right">{item.ip}</TableCell>
                    <TableCell align="right" sx={{color:`${(item.status === "Secure" ? "aqua" : "red")}`}}>{item.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default GraphicTable;
