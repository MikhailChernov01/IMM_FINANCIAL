import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LineCurrency from '../LineCurrency/LineCurrency'
import LineChartEuro from '../LineCurrencyEuro/LineCurrencyEuro';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Currency() {
  const useStyles = makeStyles({
    tables: {
      fontFamily: [
        "Roboto", "Helvetica", "Arial", "sans-serif"
      ].join(',')
    }

  });


  const classes = useStyles();
  return (
    <Grid className={classes.tables} container spacing={2}>
        
        <Grid item xs={12} sm={6}>
          <Card >
            <CardContent >
              <LineCurrency/>
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
