import React from "react";
// mui
import { Container } from "@mui/material";
// service
import { getChatById } from "@/modules/chat/services/chat.service";
// components
import ChatWindow from "@/modules/chat/components/ChatWindow";

export default async function PageChat({ params }: { params: { id: string } }) {
  const chat = await getChatById(params.id);

  return (
    <Container>
      <ChatWindow chat={chat} />
    </Container>
  );
}
