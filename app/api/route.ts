import { doServerLogic } from "@/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await doServerLogic();

    return NextResponse.json({
      status: 200,
      message: "Api works and does some server logic",
      data: null,
    });
  } catch (error) {
    // add logger
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Server logic failed",
      data: null,
    });
  }
}
