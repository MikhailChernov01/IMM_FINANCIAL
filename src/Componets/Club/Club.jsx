import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    justifyItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    background: "#f9dcc4",
  },
});

export default function Club() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              {bull}Open account{bull}
            </Typography>
          </CardContent>
          <CardActions className={classes.root}>
            <Button size="small" className={classes.button}>
              Open
            </Button>
            <Button size="small" className={classes.button}>
              More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={3}>
        You Accouts
      </Grid>
    </Grid>
  );
}
