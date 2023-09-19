import ChatWindow from "@/modules/chat/components/ChatWindow";
import React from "react";

export default function PageChat({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Chat with id: {params.id}</h2>
      <ChatWindow />;
    </>
  );
}
