import React, { memo } from "react";
import { Link } from "../components/style/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  index = 0,
  newMessageAlert,
  unreadCount = 0,
  handleClick,
  isOnline,
  handleDeleteChatOpen,
}) => {
  return (
    <Link to={`/chats/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e,_id,groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && <Typography>{newMessageAlert.count}</Typography>}
        </Stack>

        {isOnline && <Box sx={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            backgroundColor: "green",
            color: "white",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            transform: "translateY(-50%)",
        }} />}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
