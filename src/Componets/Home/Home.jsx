import React from "react";
import { makeStyles } from "@material-ui/core";



import Button from "@material-ui/core/Button";


import { useDispatch, useSelector } from "react-redux";
import { thisAction } from "../redux/action";

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
    backgroundColor: 'black',
  }
}));

function Home() {
  const dispatch = useDispatch()
  const magic = useSelector(state=> state.action.magic)
  console.log(magic);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.paper}>Home</h1>
        <Button variant="contained" color="primary" onClick={()=>{dispatch(thisAction(false))}}>
          MAGIC
        </Button>
      </div>
    </>
  );
}

export default Home;
