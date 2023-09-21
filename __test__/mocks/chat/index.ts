import { Chat, ChatItem } from "@/modules/chat/types/chat.types";

const chatItemsMock: ChatItem[] = [
  {
    id: "c1",
    lastMessage: "Hey, how are you?",
    avatar: "path/to/avatar1.png",
    nickname: "Alice",
  },
  {
    id: "c2",
    lastMessage: "Sent you the documents via email.",
    avatar: "path/to/avatar2.png",
    nickname: "Bob",
  },
  {
    id: "c3",
    lastMessage: "Looking forward to our meeting.",
    avatar: "path/to/avatar3.png",
    nickname: "Charlie",
  },
  {
    id: "c4",
    lastMessage: "Happy Birthday! 🎉",
    avatar: "path/to/avatar4.png",
    nickname: "Dave",
  },
  {
    id: "c5",
    lastMessage: "The project is almost complete.",
    avatar: "path/to/avatar5.png",
    nickname: "Eve",
  },
];

const chatMock: Chat[] = [
  {
    id: "c1",
    participants: [
      {
        id: "ID",
        nickname: "Alice",
        avatar: "path/to/avatar1.png",
        isOnline: true,
      },
      {
        id: "u2",
        nickname: "Bob",
        avatar: "path/to/avatar2.png",
        isOnline: false,
      },
    ],
    messages: [
      {
        id: "m1",
        type: "text",
        body: "Hey, how are you?",
        date: new Date("2023-04-01T12:34:56.789Z"),
        sentByUserId: "ID",
      },
      {
        id: "m2",
        type: "text",
        body: "I am good, thank you!",
        date: new Date("2023-04-01T12:36:00.000Z"),
        sentByUserId: "u2",
      },
    ],
  },
  {
    id: "c2",
    participants: [
      {
        id: "u3",
        nickname: "Charlie",
        avatar: "path/to/avatar3.png",
        isOnline: true,
      },
      {
        id: "ID",
        nickname: "Dave",
        avatar: "path/to/avatar4.png",
        isOnline: false,
      },
    ],
    messages: [
      {
        id: "m3",
        type: "text",
        body: "Sent you the documents via email.",
        date: new Date("2023-04-02T14:30:00.000Z"),
        sentByUserId: "u3",
      },
      {
        id: "m4",
        type: "text",
        body: "Received, thank you!",
        date: new Date("2023-04-02T14:31:00.000Z"),
        sentByUserId: "ID",
      },
    ],
  },
  {
    id: "c3",
    participants: [
      {
        id: "u5",
        nickname: "Eve",
        avatar: "path/to/avatar5.png",
        isOnline: true,
      },
      {
        id: "ID",
        nickname: "Frank",
        avatar: "path/to/avatar6.png",
        isOnline: false,
      },
    ],
    messages: [
      {
        id: "m5",
        type: "text",
        body: "Looking forward to our meeting.",
        date: new Date("2023-04-03T10:20:00.000Z"),
        sentByUserId: "u5",
      },
      {
        id: "m6",
        type: "text",
        body: "Me too!",
        date: new Date("2023-04-03T10:21:00.000Z"),
        sentByUserId: "ID",
      },
    ],
  },
  {
    id: "c4",
    participants: [
      {
        id: "ID",
        nickname: "George",
        avatar: "path/to/avatar7.png",
        isOnline: true,
      },
      {
        id: "u8",
        nickname: "Helen",
        avatar: "path/to/avatar8.png",
        isOnline: false,
      },
    ],
    messages: [
      {
        id: "m7",
        type: "text",
        body: "Happy Birthday! 🎉",
        date: new Date("2023-04-04T08:15:00.000Z"),
        sentByUserId: "ID",
      },
      {
        id: "m8",
        type: "text",
        body: "Thank you so much!",
        date: new Date("2023-04-04T08:16:00.000Z"),
        sentByUserId: "u8",
      },
    ],
  },
  {
    id: "c5",
    participants: [
      {
        id: "ID",
        nickname: "Igor",
        avatar: "path/to/avatar9.png",
        isOnline: true,
      },
      {
        id: "u10",
        nickname: "Jill",
        avatar: "path/to/avatar10.png",
        isOnline: false,
      },
    ],
    messages: [
      {
        id: "m9",
        type: "text",
        body: "The project is almost complete.",
        date: new Date("2023-04-05T18:45:00.000Z"),
        sentByUserId: "ID",
      },
      {
        id: "m10",
        type: "text",
        body: "Great news!",
        date: new Date("2023-04-05T18:46:00.000Z"),
        sentByUserId: "u10",
      },
    ],
  },
];

export { chatItemsMock, chatMock };
