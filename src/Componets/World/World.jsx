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
    },
  });

  const classes = useStyles();

  const stocks = useSelector((state) => state.fetch.indicators);
<<<<<<< HEAD
=======
  

>>>>>>> 445ab2d5447fe07ef88d43efd8630bdc170dddc5

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(addStockTable());
    }
  }, [dispatch]);
<<<<<<< HEAD
=======

console.log(stocks)
>>>>>>> 445ab2d5447fe07ef88d43efd8630bdc170dddc5

  return (
    <>
      <Grid className={classes.tables} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <StocksUsa />
        </Grid>
<<<<<<< HEAD
        <Grid className={classes.tables} item xs={12} sm={8}>
=======
        <Grid className={classes.tables} item xs={12} sm={8} >
>>>>>>> 445ab2d5447fe07ef88d43efd8630bdc170dddc5
          <LineChartAppl />
        </Grid>
      </Grid>
    </>
  );
}

export default World;
