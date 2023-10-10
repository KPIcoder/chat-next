import chatService from "@/server/modules/chat/services";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const chat = await chatService.getChat(params.id);

    if (!chat)
      return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json(chat);
  } catch (error) {
    // logger
    console.error(error);
    return NextResponse.error();
  }
}
