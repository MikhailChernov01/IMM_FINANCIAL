import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, Typography, Grid } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { newsAdd } from "../redux/action";
import {} from "dotenv/config";
import LineChart from "../Chart/Line";
import SchedulerChart from "../Scheduler/Scheduler";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#414141",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  root: {
    width: "auto",
    padding: "0 5%",
    "& > *": {
      // margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  magic: {
    backgroundColor: "black",
  },
  title: {
    fontSize: "20px",
  },
  news: {
    fontSize: "18px",
  },
  card: {
    background: "none",
    // justifyContent: "center",
    // justifyItems: "center",
  },
  avatar: {
    background: "#0077b6",
  },
}));

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.fetch.news[0]);
  const [expanded, setExpanded] = useState(0);

  console.log(news);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(newsAdd());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.paper}>Business news</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {news &&
              news.articles.map((elem, i) => (
                <>
                  <Accordion
                    square
                    expanded={expanded === `panel${i + 1}`}
                    onChange={handleChange(`panel${i + 1}`)}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography className={classes.title}>
                        {elem.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.news} key={i}>
                        {elem.description}
                        <br />
                        <a href={elem.url}>Read more</a>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    E
                  </Avatar>
                }
                title="The BEST Graduates"
                subheader="August 21, 2020"
              />
              <img
                src={require("../BackVideo/Image/photo_2020-08-21_12-54-47.jpg")}
                alt="COOL BOYS"
                style={{
                  width: "800px",
                  height: "600px",
                  justifyItems: "center",
                  marginLeft: "5%",
                }}
              />

              <CardContent>
                <Typography variant="h5" component="p">
                  You’re on your way to seek new vistas, dream new dreams,
                  embark on who you are. Remember to embrace life with passion
                  and keep reaching for the stars. Before you act, listen.
                  Before you react, think. Before you criticize, wait. And,
                  before you quit, try. Know what makes your graduation extra
                  special? It’s having watched you grow up, sharing amazing
                  memories with you, and knowing all the challenges you’ve
                  worked through to get to this day. You did it, guys.
                </Typography>
              </CardContent>
            </Card>
            <LineChart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
