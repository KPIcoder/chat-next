import Image from "next/image";
import { Box, Typography } from "@mui/material";

type Props = {
  avatar: string;
  isOnline?: boolean;
};

export default function ChatHeader({ avatar, isOnline }: Props) {
  return (
    <Box height={100}>
      <Image width={50} height={50} src={avatar} alt="User avatar" />
      {isOnline && <Typography>Online</Typography>}
    </Box>
  );
}
