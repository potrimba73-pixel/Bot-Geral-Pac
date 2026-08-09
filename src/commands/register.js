import {
  REST, Routes, SlashCommandBuilder, PermissionFlagsBits,
} from "discord.js";
import { CONFIG } from "../config/index.js";
import { truckySlashCommands } from "./truckyCommands.js";
import { truckyImageSlashCommands } from "./truckyImageCommands.js";
import { mapaCanalSlashCommands } from "./truckyMapaCanal.js";

export async function registerCommands() {
  const commands = [
    new SlashCommandBuilder()
      .setName("ajuda")
      .setDescription("Central de ajuda da Portugal Alfa Community")
      .setDefaultMemberPermissions(null)
      .toJSON(),
    new SlashCommandBuilder()
      .setName("status")
      .setDescription("Mostra o status do bot e informacoes do servidor")
      .setDefaultMemberPermissions(null)
      .toJSON(),
    new SlashCommandBuilder()
      .setName("limpar")
      .setDescription("Limpa mensagens do canal (usar bot de tickets)")
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
      .addIntegerOption((option) =>
        option.setName("quantidade").setDescription("Numero de mensagens").setRequired(true).setMinValue(1).setMaxValue(100),
      )
      .toJSON(),
    // === COMANDOS TRUCKY ===
    ...truckySlashCommands,
    // === COMANDOS TRUCKY IMAGE ===
    ...truckyImageSlashCommands,
    // === COMANDO MAPA CANAL ===
    ...mapaCanalSlashCommands,
  ];

  const rest = new REST({ version: "10" }).setToken(CONFIG.TOKEN);

  try {
    console.log("[Geral Register] A registar comandos de barra...");

    await rest.put(
      Routes.applicationGuildCommands(CONFIG.CLIENT_ID, CONFIG.GUILD_ID),
      { body: commands },
    );
    console.log("[Geral Register] Comandos registados no servidor principal!");
  } catch (error) {
    console.error("[Geral Register] Erro ao registar comandos:", error);
  }
}
