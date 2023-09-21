import { chatItemsMock, chatMock } from "@/__test__/mocks/chat";
import { Chat, ChatItem } from "../types/chat.types";

export const getChats = () =>
  new Promise<ChatItem[]>((resolve) =>
    setTimeout(() => resolve(chatItemsMock), 300)
  );

export const getChatById = (id: string) =>
  new Promise<Chat>((resolve) =>
    setTimeout(() => resolve(chatMock.find((chat) => chat.id === id)!), 300)
  );
