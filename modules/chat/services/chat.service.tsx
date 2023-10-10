import { chatItemsMock, chatMock } from "@/__test__/mocks/chat";
import { Chat, ChatItem } from "../types/chat.types";

export const getChats = async () => {
  const response = await fetch("http://localhost:3000/api/chat", {
    next: { revalidate: 5 },
  });
  const { data: chats } = await response.json();
  return chats as Promise<ChatItem[]>;
};

export async function getChat(id: string) {
  const response = await fetch(`http://localhost:3000/api/chat/${id}`, {
    cache: "no-store",
  });
  const chat = await response.json();
  return chat as Promise<Chat>;
}

export const getChatsMocked = () =>
  new Promise<ChatItem[]>((resolve) =>
    setTimeout(() => resolve(chatItemsMock), 300)
  );

export const getChatById = (id: string) =>
  new Promise<Chat>((resolve) =>
    setTimeout(() => resolve(chatMock.find((chat) => chat.id === id)!), 300)
  );
