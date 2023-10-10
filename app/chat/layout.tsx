import React from "react";
// mui
import { Container, Box } from "@mui/material";
// services
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getChats, getChatsMocked } from "@/modules/chat/services/chat.service";
// components
import ChatHeader from "@/modules/chat/components/ChatHeader";
import ChatList from "@/modules/chat/components/ChatList";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chats = await getChats();
  // const chats = await getChatsMocked();

  return (
    <Container>
      <ChatHeader avatar="https://i.pravatar.cc/50?img=3" isOnline />
      <Box display={"flex"}>
        <ChatList chats={chats} />
        {children}
      </Box>
    </Container>
  );
}
