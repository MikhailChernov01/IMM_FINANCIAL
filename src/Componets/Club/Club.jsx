import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { accountAdd, accountShow } from "../redux/actionLocal";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import Account from "./Account";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LineChart from "../Chart/Line";

const Button = styled.button`
  background: ${(props) => props.primary || "#f9dcc4"};
  border: 2px solid palevioletred;
  border-radius: 8px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
  font-family: "Roboto Condensed", sans-serif;
`;

const Typography = styled.h2`
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  text-align: center;
`;

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

  pos: {
    marginBottom: 12,
  },
  link: {
    color: "green",
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
          <CardContent className={classes.root}>
            <Typography>
              {bull}Open account{bull}
            </Typography>
          </CardContent>
          <CardActions className={classes.root}>
            <Button onClick={() => dispatch(accountAdd())}>Open</Button>
            <Button onClick={() => alert("No work")}>More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LineChart />
      </Grid>
      {/* <Grid item xs={12} sm={3}></Grid> */}
      <Grid item xs={12} sm={3} className={classes.root}>
        <Typography className={classes.root}>Accounts:</Typography>
        <br />
        {account &&
          account.map((e, i) => (
            <>
              <Link to={`/club/${e.title}`} className={classes.link} key={i}>
                <Typography>{e.title}</Typography>
              </Link>
            </>
          ))}
      </Grid>
      <Grid container spacing={3} justify="center">
        <Switch>
          <Route path="/club/:id" children={<Account />}></Route>
        </Switch>
      </Grid>
    </Grid>
  );
}
