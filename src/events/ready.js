import { setExternalClient, setupExternalLogChannels } from "../services/externalLogs.js";
import { CONFIG } from "../config/index.js";

export async function handleReady(client) {
  console.log(`[Geral Ready] 🤖 Bot Geral online: ${client.user.tag}`);

  client.user.setPresence({
    activities: [{ name: '/ajuda | Portugal Alfa Community', type: 0 }],
    status: 'online',
  });

  setExternalClient(client);

  try {
    const externalGuild = await client.guilds.fetch(CONFIG.EXTERNAL_LOG_GUILD_ID).catch(() => null);
    if (externalGuild) {
      await setupExternalLogChannels(externalGuild);
    } else {
      console.warn("[Geral Ready] Servidor externo de logs não encontrado.");
    }
  } catch (err) {
    console.error("[Geral Ready] Erro no setup de canais externos:", err.message);
  }

  console.log("[Geral Ready] ✅ Bot Geral pronto!");
}
