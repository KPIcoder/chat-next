import { Typography } from "@mui/material";
import { Chat } from "../types/chat.types";
import ChatMessage from "./ChatMessage";

type Props = {
  chat?: Chat;
};

export default function ChatWindow({ chat }: Props) {
  if (!chat) return <Typography>Select chat to start messaging</Typography>;

  const getParticipantAvatarById = (id: string) =>
    chat.participants.find((participant) => participant.id === id)!.avatar;

  return (
    <>
      {chat.messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          avatar={getParticipantAvatarById(message.sentByUserId)}
        />
      ))}
    </>
  );
}
