import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, Typography, Grid } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { newsAdd } from "../redux/action";
import {} from "dotenv/config";
import LineChart from "../Chart/Line";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#a0c4ff",
  },
  root: {
    width: "auto",
    "& > *": {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  magic: {
    backgroundColor: "black",
  },
  title: {
    fontSize: '10px'
  },
  news:{
    fontSize: '8px'
  }
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(newsAdd());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.paper}>Деловые Новости</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {news &&
              news.articles.map((elem, i) => 
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
                      <Typography className={classes.title}>{elem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.news} key={i}>{elem.content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                  </>
              )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
