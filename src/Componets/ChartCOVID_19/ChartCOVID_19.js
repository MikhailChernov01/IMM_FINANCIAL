import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { useDispatch, useSelector } from "react-redux";
import { startFetch } from "../redux/action";

function ChartCOVID_19(props) {
  const dispatch = useDispatch();
  const covid = useSelector((state) => state.fetch.covid).slice(40);

  useEffect(() => {
    dispatch(startFetch());
  }, [dispatch]);
  return (
    <>
      <Paper>
        <Chart data={covid}>
          <ArgumentAxis />
          <ValueAxis max={7} />
          <BarSeries valueField="deceased" argumentField="country" />
          <Title text="World COVID-19" />
          <Animation />
        </Chart>
      </Paper>
    </>
  );
}

export default ChartCOVID_19;
