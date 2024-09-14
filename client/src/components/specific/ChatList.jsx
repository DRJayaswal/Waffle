import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../../shared/ChatItem'

const ChatList = ({
    w="100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [{
        chatId: "",
        count: 0,
    }],
    handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={'column'}>
        {
            chats?.map((data,index)=>{
                const {avatar, _id, name, groupChat, members} = data
                const NewMessagesAlert = newMessagesAlert.find((alert) => alert.chatId === _id)
                const isOnline = members.some((members) => onlineUsers.includes(_id))
                return (
                    <ChatItem
                    index={index}
                    newMessagesAlert={NewMessagesAlert}
                    isOnline={isOnline}
                    avatar={avatar}
                    _id={_id}
                    key={_id}
                    name={name}
                    groupChat={groupChat}
                    sameSender={chatId == _id}
                    handleDeleteChat={handleDeleteChat}/>
                )
            })
        }
    </Stack>
  )
}

export default ChatList;