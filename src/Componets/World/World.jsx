import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import StocksUsa from "../StocksUsa/StocksUsa";
import { makeStyles } from "@material-ui/core/styles";
import LineChartAppl from "../ChartAppl/ChartAppl";
import { addStockTable } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function World() {
  const dispatch = useDispatch()
  const useStyles = makeStyles({
    tables: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      display: "flex",
      flexWrap: "wrap",
      padding: '0 5%'
    },
  });

  const classes = useStyles();

  const stocks = useSelector((state) => state.fetch.indicators);
  


  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(addStockTable());
    }
  }, [dispatch]);

console.log(stocks)

  return (
    <>
      <Grid className={classes.tables} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <StocksUsa />
        </Grid>
        <Grid className={classes.tables} item xs={12} sm={8} >
          <LineChartAppl />
        </Grid>
      </Grid>
    </>
  );
}

export default World;
