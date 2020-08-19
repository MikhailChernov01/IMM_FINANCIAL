import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import { newsAdd } from "../redux/action";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#ddbea9",
  },
  noRed: {
    color: "grey",
  },
  red: {
    color: "red",
  },
}));

export default function Cardnews() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const news = useSelector((state) => state.fetch.news[0]);
  const dispatch = useDispatch();
  const [expandedId, setExpandedId] = useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  const handleLikeClick = (e, i) => {
    let { name } = e.target.parentNode;
    if ((name = i)) {
      return (e.target.parentNode.style.color = "red");
    }
  };
  useEffect(() => {
    dispatch(newsAdd());
  }, [dispatch]);

  return (
    <>
      <Grid container direction="row" spacing={3}>
        {news &&
          news.articles.map((elem, i) => (
            <>
              <Grid item xs={12} sm={3}>
                <Card className={classes.root} name={i}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {elem.source.name[0]}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <Link href={elem.url}>
                          <MoreVertIcon />
                        </Link>
                      </IconButton>
                    }
                    title={elem.title}
                    subheader={elem.publishedAt}
                    key={i}
                  />
                  <CardMedia
                    className={classes.media}
                    image={
                      elem.urlToImage
                        ? elem.urlToImage
                        : require("./icons8-error-100.png")
                    }
                    title={elem.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {elem.content || elem.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    name={i}
                    style={{ color: "grey" }}
                  >
                    <IconButton
                      aria-label="add to favorites"
                      name={i}
                      onClick={(e) => handleLikeClick(e, i)}
                      style={{ color: "grey" }}
                    >
                      <FavoriteIcon name={i} style={{ color: "grey" }} />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      onClick={() => {
                        alert("No work");
                      }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expandedId === i}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Short</Typography>
                      <Typography paragraph>
                        {elem.content || elem.description}
                      </Typography>
                      <Typography paragraph>All post</Typography>
                      <Typography paragraph>
                        <Link href={elem.url}>{elem.url}</Link>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </>
          ))}
      </Grid>
    </>
  );
}
