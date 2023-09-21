"use client";

import { Box, Typography } from "@mui/material";
import { Chat, Message } from "../types/chat.types";
import ChatMessage from "./ChatMessage";
import ChatInput from "./СhatInput";
import { useState } from "react";
import { useUser } from "@/modules/shared/hooks/useUser";

type Props = {
  chat?: Chat;
};

export default function ChatWindow({ chat }: Props) {
  const { user } = useUser();
  const [messages, setMessages] = useState(chat?.messages);
  if (!chat) return <Typography>Select chat to start messaging</Typography>;

  const getParticipantAvatarById = (id: string) =>
    chat.participants.find((participant) => participant.id === id)!.avatar;

  const handleSend = (message: string) => {
    console.log(message);

    // api call defined in service
    const newMessage: Message = {
      id: "m" + Date.now(),
      date: new Date(Date.now()).toLocaleDateString(),
      body: message.trimEnd(),
      type: "text",
      sentByUserId: user.id,
    };
    setMessages((prev) => {
      return prev ? [...prev, newMessage] : prev;
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {messages &&
        messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            avatar={getParticipantAvatarById(message.sentByUserId)}
          />
        ))}
      <ChatInput handleSend={handleSend} sx={{ mt: 3 }} />
    </Box>
  );
}
