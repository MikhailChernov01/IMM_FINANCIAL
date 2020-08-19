import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default function LineChartAppl() {

  const useStyles = makeStyles({

    lineChart: {
      minWidth: 100,
      display: "flex",
      
    },
  });
  const classes = useStyles();

  const stocks = useSelector((state) => state.fetch.indicators);
  console.log(stocks)

  let currentValue = "";

  let data = {}

  function drawLineChart(stockItem) {

    if (stockItem) {
      let tempCurrency = Object.values(stockItem["Time Series (Daily)"]).map((el) => {
        if (el) {
          return el["4. close"];
        }
      }).reverse();
      currentValue = parseFloat(tempCurrency.pop())

      return data = {
        labels: Object.keys(stockItem["Time Series (Daily)"]).reverse(),
        datasets: [
          {
            label: (`${stockItem["Meta Data"]["2. Symbol"]}`),
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: tempCurrency
          }
        ]
      };
    }
  }

  return (
    <>             
        {stocks.map((el) =>
          <Grid item xs={12} sm={6}>
            <Line className={classes.lineChart} data={drawLineChart(el)} />
        </Grid>
        )}
      
    </>
  );
}


