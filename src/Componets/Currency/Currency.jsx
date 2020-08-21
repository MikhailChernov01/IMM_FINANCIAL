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
import Container from '@material-ui/core/Container';
import { Typography } from "@material-ui/core";

function Currency() {
  const useStyles = makeStyles({
    tables: {
      fontFamily: [
        "Roboto", "Helvetica", "Arial", "sans-serif"
      ].join(','),
      padding: '5em',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
      
    },
    currCard: {
      margin: '0',
      width: "100%",
      padding: '100px'
    },
    container:{
      minHeight: '100vh',      
    },
    title:{
      fontSize: '3em',
      textAlign: 'center',
    },

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
    <Container className={classes.container} component="main" maxWidth="xl" >
      <Typography className={classes.title} >Forex</Typography>
    <Grid className={classes.tables} container spacing={5}>

      <Grid className={classes.currCard} item xs={12} sm={6}>
        <Card >
          <CardContent >
            <LineCurrency />
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.currCard} item xs={12} sm={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam pariatur blanditiis, architecto fugit doloribus sequi, illo facere vel minus accusantium distinctio similique consequuntur, placeat nemo voluptatibus nobis tenetur fugiat tempore animi possimus autem dicta eum nulla! Officia, voluptate non neque omnis molestiae esse aut fugit nulla fuga sequi eligendi voluptates soluta impedit distinctio corporis laudantium, incidunt quaerat cupiditate culpa dignissimos magnam ea quam excepturi natus? Necessitatibus earum quo, autem magnam aut qui nobis sit nostrum illo explicabo voluptatem vel et praesentium harum dolores quam. Nesciunt error officiis quaerat nobis nihil incidunt aliquam deleniti et iure facere distinctio, odit porro magnam praesentium! Ratione quis architecto possimus itaque pariatur nisi et deleniti dolore explicabo dignissimos ipsam, molestias, asperiores neque corporis assumenda? Dolor cumque consequatur architecto suscipit sed inventore, sunt minima, alias dolore vitae, eaque provident. Accusamus id quo nesciunt deserunt. At laborum fuga quas voluptatibus exercitationem dolor magnam hic repellat suscipit. Officia nisi repudiandae laborum molestiae, sed aliquam quia, incidunt perferendis ducimus vel aut enim! Deserunt, non obcaecati officia ducimus tenetur iure illum animi sunt nostrum sint perferendis harum aliquam repellat maxime ipsum ut? Corporis, dolorem. Adipisci, numquam minima! Asperiores consectetur dolorem ad modi fugiat praesentium! Quia nobis consequatur libero corporis, id nihil cupiditate obcaecati minima quae? Libero provident a aut veritatis totam laudantium fugit repellat velit laboriosam officia, eveniet pariatur error voluptas, ex aliquid non. Assumenda quasi id repudiandae nisi quos iusto illum vitae.
      </Grid>
      <Grid className={classes.currCard} item xs={12} sm={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam pariatur blanditiis, architecto fugit doloribus sequi, illo facere vel minus accusantium distinctio similique consequuntur, placeat nemo voluptatibus nobis tenetur fugiat tempore animi possimus autem dicta eum nulla! Officia, voluptate non neque omnis molestiae esse aut fugit nulla fuga sequi eligendi voluptates soluta impedit distinctio corporis laudantium, incidunt quaerat cupiditate culpa dignissimos magnam ea quam excepturi natus? Necessitatibus earum quo, autem magnam aut qui nobis sit nostrum illo explicabo voluptatem vel et praesentium harum dolores quam. Nesciunt error officiis quaerat nobis nihil incidunt aliquam deleniti et iure facere distinctio, odit porro magnam praesentium! Ratione quis architecto possimus itaque pariatur nisi et deleniti dolore explicabo dignissimos ipsam, molestias, asperiores neque corporis assumenda? Dolor cumque consequatur architecto suscipit sed inventore, sunt minima, alias dolore vitae, eaque provident. Accusamus id quo nesciunt deserunt. At laborum fuga quas voluptatibus exercitationem dolor magnam hic repellat suscipit. Officia nisi repudiandae laborum molestiae, sed aliquam quia, incidunt perferendis ducimus vel aut enim! Deserunt, non obcaecati officia ducimus tenetur iure illum animi sunt nostrum sint perferendis harum aliquam repellat maxime ipsum ut? Corporis, dolorem. Adipisci, numquam minima! Asperiores consectetur dolorem ad modi fugiat praesentium! Quia nobis consequatur libero corporis, id nihil cupiditate obcaecati minima quae? Libero provident a aut veritatis totam laudantium fugit repellat velit laboriosam officia, eveniet pariatur error voluptas, ex aliquid non. Assumenda quasi id repudiandae nisi quos iusto illum vitae.
      </Grid>
      <Grid className={classes.currCard} item xs={12} sm={6}>
        <Card >
          <CardContent >
            <LineChartEuro />
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.currCard} item xs={12} sm={12}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam pariatur blanditiis, architecto fugit doloribus sequi, illo facere vel minus accusantium distinctio similique consequuntur, placeat nemo voluptatibus nobis tenetur fugiat tempore animi possimus autem dicta eum nulla! Officia, voluptate non neque omnis molestiae esse aut fugit nulla fuga sequi eligendi voluptates soluta impedit distinctio corporis laudantium, incidunt quaerat cupiditate culpa dignissimos magnam ea quam excepturi natus? Necessitatibus earum quo, autem magnam aut qui nobis sit nostrum illo explicabo voluptatem vel et praesentium harum dolores quam. Nesciunt error officiis quaerat nobis nihil incidunt aliquam deleniti et iure facere distinctio, odit porro magnam praesentium! Ratione quis architecto possimus itaque pariatur nisi et deleniti dolore explicabo dignissimos ipsam, molestias, asperiores neque corporis assumenda? Dolor cumque consequatur architecto suscipit sed inventore, sunt minima, alias dolore vitae, eaque provident. Accusamus id quo nesciunt deserunt. At laborum fuga quas voluptatibus exercitationem dolor magnam hic repellat suscipit. Officia nisi repudiandae laborum molestiae, sed aliquam quia, incidunt perferendis ducimus vel aut enim! Deserunt, non obcaecati officia ducimus tenetur iure illum animi sunt nostrum sint perferendis harum aliquam repellat maxime ipsum ut? Corporis, dolorem. Adipisci, numquam minima! Asperiores consectetur dolorem ad modi fugiat praesentium! Quia nobis consequatur libero corporis, id nihil cupiditate obcaecati minima quae? Libero provident a aut veritatis totam laudantium fugit repellat velit laboriosam officia, eveniet pariatur error voluptas, ex aliquid non. Assumenda quasi id repudiandae nisi quos iusto illum vitae.
      </Grid>
    </Grid>
    </Container>
  )
}

export default Currency
