import { PermissionFlagsBits } from "discord.js";
import { CONFIG } from "../config/index.js";
import { handleAjudaCommand } from "../services/ajuda.js";
import { handleTruckyCommand } from "../commands/truckyCommands.js";
import { handleTruckyImageCommand } from "../commands/truckyImageCommands.js";
import { handleMapaCanalCommand } from "../commands/truckyMapaCanal.js";

export async function handleInteractionCreate(interaction, client) {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  // ========== /AJUDA ==========
  if (commandName === "ajuda") {
    await interaction.deferReply({ flags: 64 });
    return handleAjudaCommand(interaction, client);
  }

  // ========== /STATUS ==========
  if (commandName === "status") {
    return interaction.reply({
      content: `🤖 **PAC Bot Geral** está online!\n⏰ Uptime: ${Math.floor(process.uptime())}s`,
      flags: 64
    });
  }

  // ========== /LIMPAR ==========
  if (commandName === "limpar") {
    return interaction.reply({
      content: "⚠️ Comando /limpar movido para o bot de Tickets.",
      flags: 64
    });
  }

  // ========== COMANDOS TRUCKY ==========
  try {
    const truckyHandled = await handleTruckyCommand(interaction, client);
    if (truckyHandled) return;
  } catch (e) {
    console.error("[Geral] Erro comando Trucky:", e);
  }

  // ========== COMANDOS TRUCKY IMAGE ==========
  try {
    const imageHandled = await handleTruckyImageCommand(interaction);
    if (imageHandled) return;
  } catch (e) {
    console.error("[Geral] Erro comando Trucky Image:", e);
  }

  // ========== COMANDO MAPA CANAL ==========
  try {
    const mapaHandled = await handleMapaCanalCommand(interaction, client);
    if (mapaHandled) return;
  } catch (e) {
    console.error("[Geral] Erro comando Mapa Canal:", e);
  }

  // Comando não reconhecido
  return interaction.reply({
    content: `${CONFIG.EMOJI_ERROR} Comando não reconhecido.`,
    flags: 64
  }).catch(() => {});
}
