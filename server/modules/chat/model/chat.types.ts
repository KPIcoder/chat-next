export type ChatItem = {
  id: string;
  lastMessage: string;
  lastMessageDate: Date | string | number;
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
  unreadCount: number;
  isOnline?: boolean;
};

export type PgChatItem = {
  id: string;
  last_message: string;
  last_message_dttm: Date | string;
  avatar: string;
  name: string;
};

export type PgChatParticipant = {
  id: string;
  nickname: string;
  avatar: string;
  last_seen: Date | string | number;
  unread_count: number;
};

export type PgChatMessage = {
  id: string;
  chat_id: string;
  message_type: "text" | "image" | "file";
  body: string;
  date: Date | string | number;
  sent_by_user_id: string;
};
