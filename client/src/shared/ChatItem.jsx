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
  newMessagesAlert,
  unreadCount = 0,
  handleClick,
  isOnline,
  handleDeleteChat,
}) => {
  return (
    <Link
    className="chat-item-section"
    to={`/chats/${_id}`}
    onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
      <Stack
        className={`chat-item ${sameSender ? 'same-sender' : ''}`}
      >
        <Stack>
          <Typography>{name}</Typography>
          {newMessagesAlert && <Typography>{newMessagesAlert.count} New Messages</Typography>}
        </Stack>

        {isOnline && <Box className="online-status" />}
      </Stack>
    </Link>
  );
};

export default memo(ChatItem);