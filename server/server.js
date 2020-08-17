import dotenv from 'dotenv';

import express from "express";
import httpNew from "http";
import ioNew from 'socket.io'
import morgan from "morgan";
import mongoose from "mongoose";

import cors from "cors";
import methodOverride from 'method-override'
dotenv.config();


const app = express();
const http = httpNew.createServer(app)
const io =ioNew(http)


const PORT = process.env.NODE_ENV_PORT || "4000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  })
);
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));


async function start() {
  try {
    await mongoose.connect(process.env.NODE_DB_MONGO, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    http.listen(PORT, () => {
      console.log(`Listening port ${PORT}!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
