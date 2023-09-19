"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  nickname: string;
  avatar: string;
  lastMessage: string;
};

export function ChatListItem({ id, nickname, avatar, lastMessage }: Props) {
  const handleClick = () => router.push("/chat/" + id);
  const router = useRouter();

  return (
    <Box onClick={handleClick}>
      <Typography>{nickname}</Typography>
      <Avatar src={avatar} alt="User avatar" />
      <Typography>{lastMessage}</Typography>
    </Box>
  );
}
