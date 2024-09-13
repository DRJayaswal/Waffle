import React from 'react'
import { Link } from '../components/style/StyledComponents'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    index=0,
    newMessage,
    unreadCount = 0,
    handleClick,
    isOnline,
    handleDeleteChatOpen,
}) => {
  return (
    <Link to={"/"} ></Link>
  )
}

export default ChatItem