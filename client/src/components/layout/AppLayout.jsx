import React from "react";
import "./AppLayout.css"
import Header from "./Header";
import Footer from "./Footer";
import ChatList from "../specific/ChatList";
import { chat } from "../constants/sampleData";

const AppLayout = () => (WrappedComponents) => {
  return (props) => {
    return (
      <>
        <div className="header">
          <Header/>
        </div>

        <div className="container">
          <div className="sidebar">
            <ChatList chats={chat} />
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
