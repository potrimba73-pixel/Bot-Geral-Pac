import { handleSmartResponse } from '../assistant/smartResponse.js';
import { processarPerguntaETS2 } from '../assistant/ets2AI.js';

export async function handleMessageCreate(message, client) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.channel.name?.startsWith('ticket-')) return;
  if (message.content.startsWith('/')) return;

  // Assistente inteligente (FAQ + histórico Diego)
  await handleSmartResponse(message, client);

  // IA com Pollinations/Gemini para canais de ajuda
  await processarPerguntaETS2(message, client);
}
