import palette from "@/shared/config/mui-config/palette";
import { Avatar, Box, Typography } from "@mui/material";
import { Message } from "../types/chat.types";

type Props = {
  message: Message;
  avatar: string;
};

const MY_ID = "ID";

export default function ChatMessage({ avatar, message }: Props) {
  const isMineMessage = message.id === MY_ID;
  return (
    <>
      <Box>
        <Avatar src={avatar} alt="User avatar" />{" "}
        <Typography>{new Date(message.date).toDateString()}</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: isMineMessage ? palette.primary.light : "unset",
          p: 1,
        }}
      >
        <Typography align={isMineMessage ? "right" : "left"}>
          {message.body}
        </Typography>
      </Box>
    </>
  );
}
