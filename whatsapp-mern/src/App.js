import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

import Pusher from "pusher-js";
import axios from "./axios";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response?.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("ba58adf3374738ea8a9b", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Sidebar />
              <Chat messages={messages} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
