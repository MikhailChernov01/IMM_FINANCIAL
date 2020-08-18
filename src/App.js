

import React from "react";
import Home from "./Componets/Home/Home";
import SignIn from "./Componets/SignIn/SignIn";
import SignUp from "./Componets/SignUp/SignUp";
import { useSelector } from "react-redux";
import { makeStyles} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Componets/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import World from "./Componets/World/World";
import Currency from "./Componets/Currency/Currency";
import Club from "./Componets/Club/Club";
import Forum from "./Componets/Forum/Forum";
import Pif from "./Componets/Pif/Pif";
import Application from "./Componets/Application/Application";
import Strategy from "./Componets/Strategy/Strategy";
import Crisis from "./Componets/Crisis/Crisis";
import { AuthProvider } from './Auth';

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   color: "#a0c4ff",
  // },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    margin: 100,
  },
  magic: {
    backgroundColor: "black",
    margin: 100,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));



function App() {
  const magic = useSelector((state) => state.action.magic);
  const classes = useStyles();
  return (
    <>
    <AuthProvider>

      <Grid className={magic ? classes.root : classes.magic}>
        <Navbar className={classes.root} />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/entry">
            <SignIn />
          </Route>
          <Route path="/registration">
            <SignUp />
          </Route>
          <Route path="/world">
            <World />
          </Route>
          <Route path="/currency">
            <Currency />
          </Route>
          <Route path="/club">
            <Club />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/pif">
            <Pif />
          </Route>
          <Route path="/application">
            <Application />
          </Route>
          <Route path="/strategy">
            <Strategy />
          </Route>
          <Route path="/crisis">
            <Crisis />
          </Route>
        </Switch>
      </Grid>
    </AuthProvider>
    </>
  );
}

export default App;
