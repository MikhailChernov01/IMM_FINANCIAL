import React, { useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4444", {
  transports: ["websocket", "polling"],
});
const username = "ivan";
function Client() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [all, setAll] = useState([])(() => {
    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("user", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setAll((all) => [...all, message]);
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
  };
  return <></>;
}

export default Client;
