import { getChats, getChatById } from "@/modules/chat/services/chat.service";
import { chatItemsMock, chatMock } from "..";

describe("Chat functions", () => {
  test("getChats should return chat items", async () => {
    const result = await getChats();
    expect(result).toEqual(chatItemsMock);
  });

  test("getChatById should return correct chat data", async () => {
    const result = await getChatById("c1");
    expect(result).toEqual(chatMock[0]);
  });

  test("getChatById should return undefined for invalid id", async () => {
    const result = await getChatById("invalid_id");
    expect(result).toBeUndefined();
  });
});
