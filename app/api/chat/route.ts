import chatService from "@/server/modules/chat/services";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const userId = "1A2B3C4D5E6F7G8H";
    const chats = await chatService.getChatList(userId);

    // const data = await chatService.getChatList(userId);

    if (chats.length === 0) {
      return NextResponse.json({
        status: 404,
        error: "Not Found",
      });
    }

    return NextResponse.json({
      status: 200,
      data: chats,
      dataCount: chats.length,
    });
  } catch (error) {
    // logger
    console.error(error);
    return NextResponse.error();
  }
}
