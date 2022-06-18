import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DoughnutChart from "./DoughnutChart";
import GraphicTable from "./GraphicTable";
import StatusCard from "./StatusCard";

function Main() {
  return (
    <Box sx={{ width: "100%" ,mt:5}}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <DoughnutChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <StatusCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <GraphicTable/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              Merhaba4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
