import React from "react";
// mui
import { Container, Box } from "@mui/material";
// services
import { getChats } from "@/modules/chat/services/chat.service";
// components
import ChatHeader from "@/modules/chat/components/ChatHeader";
import ChatList from "@/modules/chat/components/ChatList";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chats = await getChats();

  return (
    <Container>
      <ChatHeader avatar=".." isOnline />
      <Box display={"flex"}>
        <ChatList chats={chats} />
        {children}
      </Box>
    </Container>
  );
}
