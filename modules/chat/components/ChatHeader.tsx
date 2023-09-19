import { Avatar, Box, Typography } from "@mui/material";

type Props = {
  avatar: string;
  isOnline?: boolean;
};

export default function ChatHeader({ avatar, isOnline }: Props) {
  return (
    <Box height={100}>
      <Avatar src={avatar} alt="User avatar" />
      {isOnline && <Typography>Online</Typography>}
    </Box>
  );
}
