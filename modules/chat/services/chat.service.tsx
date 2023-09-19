import { ChatItem } from "../types/chat.types";

export const getChats = () =>
  new Promise<ChatItem[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: "asefsgg",
            avatar: "..",
            lastMessage: "qwerty",
            nickname: "Bob",
          },

          {
            id: "asetygg",
            avatar: "..",
            lastMessage: "asdasd",
            nickname: "Peter",
          },

          {
            id: "aseqwgg",
            avatar: "..",
            lastMessage: "ljlkh",
            nickname: "Ben",
          },
        ]),
      300
    )
  );
