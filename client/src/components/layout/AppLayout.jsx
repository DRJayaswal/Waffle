import React from "react";
import "./AppLayout.css"
import Header from "./Header";
import Footer from "./Footer";
import ChatList from "../specific/ChatList";
import { chat } from "../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponents) => {

  
  return (props) => {
    const params = useParams();
    const  chatId = params.chatId;
  
    const handleDeleteChat = (e,_id,groupChat) => {
      e.preventDefault();
      console.log(`Deleting chat: ${_id} (${groupChat? "Group" : "Private"})`);
    };
    return (
      <>
        <div className="header">
          <Header/>
        </div>

        <div className="container">
          <div className="sidebar">
            <ChatList
            chats={chat}
            newMessagesAlert={[{
              chatId: "1",
              count: 4,
            }]}
            handleDeleteChat={handleDeleteChat}
            onlineUsers={["1", "19", "20"]}
     />
          </div>
          <div className="content">
            <WrappedComponents {...props} />
          </div>
          <div className="extra">Third</div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </>
    );
  };
};

export default AppLayout;
