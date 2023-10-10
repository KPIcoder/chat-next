import { chatMapper } from "../chat.mapper";
import {
  PgChatItem,
  PgChatMessage,
  PgChatParticipant,
} from "../model/chat.types";
import { sql } from "@vercel/postgres";

class ChatService {
  /**
   *
   */
  constructor() {}

  async getChatList(userId: string) {
    const queryResult = await sql<PgChatItem>`
      select id, "name", avatar, last_message, last_message_dttm
      from f_chat
      where id in (
        select chat_id
        from l_chat_participant
        where user_id = ${userId}
      )`;
    return queryResult.rows.map((pgChatItem) =>
      chatMapper.toChatItem(pgChatItem)
    );
  }

  async getChat(chatId: string) {
    const messagesQuery = sql<PgChatMessage>`
      select * 
      from l_chat_message
      where chat_id = ${chatId}
    `;
    const participantsQuery = sql<PgChatParticipant>`
      select fu.*, lcp.unread_count
      from f_user fu
      inner join l_chat_participant lcp 
      on lcp.user_id = fu.id 
      where lcp.chat_id = ${chatId}
    `;

    const [participantsPromise, messagesPromise] = await Promise.allSettled([
      participantsQuery,
      messagesQuery,
    ]);

    if (
      participantsPromise.status === "rejected" ||
      messagesPromise.status === "rejected"
    ) {
      return null;
    }

    return {
      id: chatId,
      participants: participantsPromise.value.rows.map((participant) =>
        chatMapper.toChatParticipants(participant)
      ),
      messages: messagesPromise.value.rows.map((message) =>
        chatMapper.toChatMessage(message)
      ),
    };
  }
}

export const chatService = new ChatService();
