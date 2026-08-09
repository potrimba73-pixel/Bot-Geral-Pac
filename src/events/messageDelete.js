import { logExternalMessageDelete } from "../services/externalLogs.js";

export async function handleMessageDelete(message) {
  if (message.author?.bot) return;
  if (!message.guild) return;

  try {
    await logExternalMessageDelete(message);
  } catch (e) {}
}
