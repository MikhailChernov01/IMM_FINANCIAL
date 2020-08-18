import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { AuthContext } from '../../Auth';
// import "bootstrap/dist/css/bootstrap.css";

// const username = prompt("what is your username");

const socket = io('http://localhost:4444', {
  transports: ['websocket', 'polling'],
});

const useStyles = makeStyles({
  root: {
    background: 'red',
  },
});

function Client() {
  const { currentUser } = useContext(AuthContext);
 

  let username = 'You write:';

  // let  username = currentUser
  // console.log(username);
  if (currentUser) {
    username = currentUser.displayName
  }
  
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    
    socket.on('connect', () => {
      socket.emit('username', username);
    });

    socket.on('users', (users) => {
      setUsers(users);
    });

    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('connected', (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on('disconnected', (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });
  }, []);

  const submit = (event) => {
    event.preventDefault();
    socket.emit('send', message);
    setMessage('');
    
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 mt-4 mb-4">
          <h6>Hello {currentUser ? currentUser.displayName : 'User'}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h6>Messages</h6>
          <div id="messages" className={classes.root}>
            {messages.map(({ user, date, text }, index) => (
              <div key={index} className="row mb-2">
                <div className="col-md-3">
                  {moment(date).format('h:mm:ss a')}
                </div>
                <div className="col-md-2">{user.name}</div>
                <div className="col-md-2">{text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={submit} id="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                id="text"
              />
              <span className="input-group-btn">
                <button id="submit" type="submit" className>
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Client;
