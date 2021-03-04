// importing
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
// import cors from "cors"
import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1161860",
  key: "ba58adf3374738ea8a9b",
  secret: "4bb911282d82cbbbc27b",
  cluster: "ap2",
  useTLS: true,
});

// middlewares
// app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());

// DB configuration
const connection_url =
  "mongodb+srv://admin:0fKFnjGLOx5D3pyv@cluster0.zuvrw.mongodb.net/whatsappDB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  // console.log(msgCollection);
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A Change occured", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        receieved: messageDetails.receieved,
      });
    } else {
      console.log("Error triggered Pusher");
    }
  });
});

// ???

// api requests
app.get("/", (req, res) => res.status(200).send("Hello Chat Members!"));

app.get("/messages/sync", (req, res) => {
  // get all the messages from the database.
  Messages.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

// listeners
app.listen(port, () => console.log(`Listening on the port:${port}`));
