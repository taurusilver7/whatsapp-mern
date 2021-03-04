import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter a room name for chat..");

    if (roomName) {
      // add a database to the room chats
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50));
  }, []);
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
