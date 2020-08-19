import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
 
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0",
    padding: 0   
  },
  imageDollar:{
    maxWidth: "1600px"
  }
  
}));

export default function DollarImage() {
  const classes = useStyles();
  return (
    <Grid className={classes.imageContainer} item xs={12}>
      <img className={classes.imageDollar} src={process.env.PUBLIC_URL + 'dollar-image-min.jpg'} />
    </Grid>
  )
}
