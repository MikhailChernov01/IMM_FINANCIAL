import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { addEuro } from "../redux/action";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export default function LineChartEuro() {

  const useStyles = makeStyles({
    
    percent: {
      minWidth: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
  });
  const classes = useStyles();

  const dispatch = useDispatch();
  const currency = useSelector((state) => state.fetch.euro[0]);
   
    useEffect(() => {
    dispatch(addEuro());
  }, [dispatch]);

//variable for current price output
  let currentValue ="";

  //variable for up or down arrow
  let lastOpenValue = "";
let data={}

//check if data come and make an arrow of data
if (currency) {
  let tempCurrency = Object.values(currency["Time Series FX (Daily)"]).map((el) => {
    if (el) {
      return el["4. close"];
    }
  }).reverse();
  currentValue = parseFloat(tempCurrency.pop())

  //data for up or down arrow
  let tempDataInd = Object.values(currency["Time Series FX (Daily)"]).map((el) => {
    if (el) {
      return el["1. open"];
    }
  }).reverse();
  lastOpenValue = parseFloat(tempDataInd.pop());

  //data for table
      data = {
      labels: Object.keys(currency["Time Series FX (Daily)"]).reverse(),
      datasets: [
        {
          label: (`${currency["Meta Data"]["3. To Symbol"]}/${currency["Meta Data"]["2. From Symbol"]}`),
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


  return (
    <>
      
      <div>
      <h3 className={classes.percent}>&#8364;{currentValue}
      {lastOpenValue < currentValue ? <ArrowUpward style={{ color: green[500] }} /> 
                : <ArrowDownwardIcon style={{ color: red[500]}} />}
  </h3>
  
  
        <Line data={data} />
      </div>
    </>
  );
}

