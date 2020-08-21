import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";

import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";

import styled from "styled-components";
const Button = styled.button`
  background: ${(props) => props.primary || "#f9dcc4"};
  border: 2px solid palevioletred;
  border-radius: 8px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
  font-family: "Roboto Condensed", sans-serif;
  `;

// const action = (
//   <Button color="secondary" size="small">
//     lorem ipsum dolorem
//   </Button>
// );

const socket = io("http://localhost:4444", {
  transports: ["websocket", "polling"],
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  scroll: {
    height: "280px",
    width: "230px",
    background: "#a0c4ff",
    overflow: "auto",
  },
  form: {
    width: "150px",
  },
  btn: {
    height: '40px',
    width:'23%'
  }
}));

export default function Office() {
  let username = "You write:";

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("connected", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("disconnected", (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });
  }, []);

  const submit = (event) => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };
  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
      >
        Chat
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <div>
          <div className="row">
            <div className="col-md-12 mt-4 mb-4">
              <h6>Hello, can I help you</h6>
            </div>
            <div className="col-md-8">
              <div id="messages" className={classes.scroll}>
                {messages.map(({ user, date, text }, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col-md-3">
                      <pre>
                      Thanks for you appeal, we don't 
                      </pre>
                      <pre>
                      work after 05-00 pm
                      </pre>
                      <pre>
                         {moment(date).format("h:mm a")}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={submit} id="form" >
                <div className="input-group">
                  <input
                    type="text"
                    className={classes.form}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="text"
                  />
                  <span className="input-group-btn">
                    <Button id="submit" type="submit" className={classes.btn}>
                      Send
                    </Button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Snackbar>
    </div>
  );
}
