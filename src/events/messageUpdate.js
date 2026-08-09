import { logExternalMessageUpdate } from "../services/externalLogs.js";

export async function handleMessageUpdate(oldMessage, newMessage, client) {
  if (newMessage.author?.bot) return;
  if (!newMessage.guild) return;

  try {
    await logExternalMessageUpdate(oldMessage, newMessage);
  } catch (e) {}
}
