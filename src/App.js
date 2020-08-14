import React from "react";
import Home from "./Componets/Home/Home";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

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
  },
  magic: {
    backgroundColor: 'black',
  }
}));

function App() {
  const magic = useSelector((state) => state.action.magic);
  const classes = useStyles();
  return (
    <>
    <Grid className={(magic) ?classes.root: classes.magic}>
      <Home />
     
    </Grid>
    </>
  );
}

export default App;
