import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Info = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  text-align: center;
  width: 40%;
  align-self: center;
`;
const Container = styled.div`
display: flex;
flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: "40%;",
  },
  text: {
    fontSize: '2em',
    padding: '1em',
    alignContent: 'justify'
  },
  thanks: {
    fontSize: '3em',
    marginTop: '50px',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  gitlogo: {
    padding: '10px',
  },
  logoShow:{
    width: "400px"
  }

});

function Pif() {
  const classes = useStyles();
  return (
    <> <Container>

      <Info className={classes.text}>
        Mikhail
        <div>
          <a href='https://github.com/MikhailChernov01'>
            <img
              src={require("../BackVideo/Image/GitHub-Mark-32px.png")}
              alt="gitlogo"
              className={classes.gitlogo}
            />
          </a>
        </div>


      </Info>
      <img
        src={require("../BackVideo/Image/photo_2020-08-21_08-36-48.jpg")}
        alt="COOL BOYS"
        className={classes.root}
      />
      <img
        src={require("../BackVideo/Image/photo_2020-08-21_08-36-34.jpg")}
        alt="COOL BOYS"
        className={classes.root}
      />
      <Info className={classes.text}>
        Igor
        <div>
          <a href='https://github.com/Igor-Ribozavr'>
            <img
              src={require("../BackVideo/Image/GitHub-Mark-32px.png")}
              alt="gitlogo"
              className={classes.gitlogo}
            />
          </a>
        </div>
      </Info>

      <Info className={classes.text}>
        Marsel
        <div>
          <a href='https://github.com/MarselBurdo'>
            <img
              src={require("../BackVideo/Image/GitHub-Mark-32px.png")}
              alt="gitlogo"
              className={classes.gitlogo}
            />
          </a>
        </div>
      </Info>
      <img
        src={require("../BackVideo/Image/photo_2020-08-21_09-57-11.jpg")}
        alt="COOL BOYS"
        className={classes.root}
      />
      <Info className={classes.thanks}>Special Thanks:<img
        src={require("../BackVideo/Image/logoShowElbrus.png")}
        alt="Another COOL BOYS"
        className={classes.logoShow}
      /></Info>

    </Container>
    </>
  );
}

export default Pif;
