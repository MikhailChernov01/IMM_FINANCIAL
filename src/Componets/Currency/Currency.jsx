import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import LineCurrency from '../LineCurrency/LineCurrency'
import LineChartEuro from '../LineCurrencyEuro/LineCurrencyEuro';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { addCurrency } from "../redux/action";
import { addEuro } from "../redux/action";

function Currency() {
  const useStyles = makeStyles({
    tables: {
      fontFamily: [
        "Roboto", "Helvetica", "Arial", "sans-serif"
      ].join(','),
      
    }

  });

  const classes = useStyles();

  const dispatch = useDispatch();
  const euro = useSelector((state) => state.fetch.euro[0]);  

  useEffect(() => {
    if (!euro) {
      console.log('>>>Euro has request')
      dispatch(addEuro());
    }
  }, [dispatch]);

  const dollar = useSelector((state) => state.fetch.usd[0]);

  useEffect(() => {
    if (!dollar) {
      console.log('>>>>>>Dollar has request')
      dispatch(addCurrency());
    }
  }, [dispatch]);

  return (
    <Grid className={classes.tables} container spacing={2}>

      <Grid item xs={12} sm={6}>
        <Card >
          <CardContent >
            <LineCurrency />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card >
          <CardContent >
            <LineChartEuro />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Currency
