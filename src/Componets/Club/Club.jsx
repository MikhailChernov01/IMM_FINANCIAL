import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { accountAdd, accountShow } from "../redux/actionLocal";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import  Account  from "./Account";

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
  link: {
    textDecoration: "none",
  },
});

export default function Club() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.entry.accounts);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {
    dispatch(accountShow());
  }, [dispatch]);

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
            <Button
              size="small"
              className={classes.button}
              onClick={() => dispatch(accountAdd())}
            >
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
        <Typography variant="h5" component="h4" align="center">
          Accounts:
        </Typography>
        <br />
        {account &&
          account.map((e, i) => <>
            <Link
              to={`/club/${e._id}`}
              className={classes.link}
              key={i}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                key={i}
                // color="secondary"
              >
                {e.title}
              </Typography>
            </Link>
          </>)}
      </Grid>
      <Grid container spacing={3} justify="center" >
        
      <Switch>
        <Route path='/club/:id'children={<Account/>}></Route>
      </Switch>
      </Grid>
    </Grid>
  );
}
