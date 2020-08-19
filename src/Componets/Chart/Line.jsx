import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { startStock } from "../redux/action";
import { TextField, Button, Grid } from "@material-ui/core";




export default function LineChart() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.fetch.stock[0]);
  const [company, setCompany] = useState("");
  

  let data = {};

  function addInfo() {
    if (info) {
    let tmpInfo = Object.values(info["Monthly Time Series"]).map((el) => {
      if (el) {
        return el["4. close"];
      }
    }).reverse();
    return  data = {
      labels: Object.keys(info["Monthly Time Series"]).reverse(),
      datasets: [
        {
          label: info["Meta Data"]["2. Symbol"],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,20,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,5,1)",// change color
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: tmpInfo,
        },
      ],
    };
  } }



  return (
    <><Grid container
    direction="row"
    justify="center"
    alignItems="center">

      <TextField 
        id="standard-basic"
        label="Company"
        name="company"
        onChange={(e) => setCompany(e.target.value)}
      />

      <Button
        variant="contained"
        style={{ backgroundColor: "#ffcdb2" }}
        onClick={()=>dispatch(startStock(company))}
      >
        Watch
      </Button>

      {info ? <Line data={addInfo} /> : <div style={{color:'#fff'}}>oooooooo</div>}
    </Grid>
    </>
  );
}
