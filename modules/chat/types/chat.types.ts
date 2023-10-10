export type Chat = {
  id: string;
  participants: ParticipantChatDetails[];
  messages: Message[];
};

export type ChatItem = {
  id: string;
  lastMessage: string;
  avatar: string;
  nickname: string;
};

export type Message = {
  id: string;
  type: "image" | "file" | "text";
  body: string;
  date: Date | string | number;
  sentByUserId: string;
};

export type ParticipantChatDetails = {
  id: string;
  nickname: string;
  avatar: string;
  isOnline?: boolean;
};
