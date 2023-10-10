// import ChatList from "@/modules/chat/components/ChatList";
// import { getChats } from "@/modules/chat/services/chat.service";
import palette from "@/shared/config/mui-config/palette";
import { AppBar, Avatar, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const getUserAvatar = () =>
  new Promise<string>((resolve) =>
    setTimeout(
      () =>
        resolve(
          "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        ),
      1000
    )
  );

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("http://localhost:3000/api/");
  const avatarUrl = await getUserAvatar();
  // const chats = await getChats();
  console.log(response.status);

  return (
    <>
      <AppBar sx={{ height: 100, bgcolor: palette.custom[100] }} />
      <Box sx={{ mt: 20 }}>
        <Link href={"/"}>
          <Avatar src={avatarUrl} alt="User" />
        </Link>
        {/* <ChatList chats={chats} /> */}
        {children}
      </Box>
    </>
  );
}
