import {
  PgChatItem,
  PgChatParticipant,
  PgChatMessage,
  ParticipantChatDetails,
  ChatItem,
  Message,
} from "./model/chat.types";

export const chatMapper = {
  toChatItem: (dto: PgChatItem): ChatItem => ({
    id: dto.id,
    avatar: dto.avatar,
    nickname: dto.name,
    lastMessage: dto.last_message,
    lastMessageDate: dto.last_message_dttm,
  }),
  toChatParticipants: (dto: PgChatParticipant): ParticipantChatDetails => ({
    id: dto.id,
    avatar: dto.avatar,
    nickname: dto.nickname,
    unreadCount: dto.unread_count,
  }),
  toChatMessage: (dto: PgChatMessage): Message => ({
    id: dto.id,
    type: dto.message_type,
    body: dto.body,
    sentByUserId: dto.sent_by_user_id,
    date: dto.date,
  }),
};
