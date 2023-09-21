import palette from "@/shared/config/mui-config/palette";
import { Avatar, Box, Typography } from "@mui/material";
import { Message } from "../types/chat.types";
import { useUser } from "@/modules/shared/hooks/useUser";

type Props = {
  message: Message;
  avatar: string;
};

export default function ChatMessage({ avatar, message }: Props) {
  const { user } = useUser();

  const isMineMessage = message.sentByUserId === user.id;

  return (
    <>
      <Box alignSelf={isMineMessage ? "flex-end" : "flex-start"}>
        <Avatar src={avatar} alt="User avatar" />{" "}
        <Typography>{new Date(message.date).toDateString()}</Typography>
        <Typography
          sx={{
            backgroundColor: isMineMessage ? palette.primary.light : "unset",
            p: 1,
            borderRadius: 2,
          }}
        >
          {message.body}
        </Typography>
      </Box>
    </>
  );
}
