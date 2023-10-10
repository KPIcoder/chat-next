import Image from "next/image";
import Link from "next/link";

import { Box, Typography } from "@mui/material";

type Props = {
  id: string;
  nickname: string;
  avatar: string;
  lastMessage: string;
};

export function ChatListItem({ id, nickname, avatar, lastMessage }: Props) {
  const link = "/chat/" + encodeURIComponent(id);

  return (
    <Link href={link}>
      <Box>
        <Typography variant="h6">{nickname}</Typography>
        <Image width={50} height={50} src={avatar} alt="User avatar" />
        <Typography>{lastMessage}</Typography>
      </Box>
    </Link>
  );
}
