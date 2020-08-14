import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#a0c4ff",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  magic: {
    backgroundColor: "black",
  },
}));

function Home() {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.paper}>Деловые Новости</h1>
      </div>
    </>
  );
}

export default Home;
