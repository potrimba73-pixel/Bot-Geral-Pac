// Configuracoes do Bot Geral - Portugal Alfa Community

export const CONFIG = {
  TOKEN: process.env.TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,
  MONGODB_URI: process.env.MONGODB_URI || "",

  // === SERVIDOR PRINCIPAL ===
  GUILD_ID: "932093509060689933",

  // === CANAIS ===
  CANAL_GERAL: "1200170007418642502",
  CANAL_LOGS: "1457144182954266634",
  CANAL_TEMPLATE_FOTO: "1204160547092697088",

  // === CARGOS ===
  CARGO_STAFF: "1347693608136081490",
  CARGO_ADMINISTRACAO: "1390770675567956018",

  // === SERVIDOR EXTERNO DE LOGS ===
  EXTERNAL_LOG_GUILD_ID: "1510401803974475947",

  // === TRUCKY ===
  TRUCKY_COMPANY_ID: process.env.TRUCKY_COMPANY_ID,

  // === CORES ===
  COR_PRINCIPAL: 0x262af1,
  COR_SUCESSO: 0x57F287,
  COR_ERRO: 0xED4245,
  COR_AVISO: 0xFEE75C,
  COR_INFO: 0xEB459E,

  // === EMOJIS ===
  EMOJI_INFO: "ℹ️",
  EMOJI_SUCCESS: "🎉",
  EMOJI_ERROR: "💥",
  EMOJI_WARNING: "⚠️",
  EMOJI_TIME: "⏰",
  EMOJI_CHECK: "✅",
  EMOJI_CROSS: "❌",
  EMOJI_SEARCH: "🔍",
  EMOJI_HELP: "🆘",
  EMOJI_TICKET: "🎫",
  EMOJI_USER: "👤",
  EMOJI_STAFF: "👮",
  EMOJI_FILE: "📄",
  EMOJI_LOADING: "⏳",

  // === CONFIGS DA IA ===
  AJUDA_CHANNELS: ["1465865626286428355", "1326963454397124649"],
  IA_LOG_FORUM_ID: "1528101026874523850",
  TRIGGER_KEYWORDS: [
    "ajuda", "como", "configurar", "instalar", "ets2", "truck",
    "mod", "vr", "grafico", "problema", "erro", "nao consigo",
    "tutorial", "video", "link", "download", "trucky", "ets2la",
    "servidor", "entrar", "comboio", "recrutamento", "juntar", "pat"
  ],
};

export const ASSISTANT_CONFIG = {
  EXPERT_USER_ID: "849132183112384573",
  ALLOWED_CHANNELS: ["1465865626286428355", "1326963454397124649"],
  TRIGGER_KEYWORDS: [
    "ajuda", "como", "configurar", "instalar", "ets2", "truck",
    "mod", "vr", "grafico", "problema", "erro", "nao consigo",
    "tutorial", "video", "link", "download", "trucky", "ets2la",
    "servidor", "entrar", "comboio", "recrutamento", "juntar", "pat"
  ],
  HISTORY_LIMIT: 200,
  COOLDOWN: 10,
  SERPER_API_KEY: process.env.SERPER_API_KEY,
};

export default CONFIG;
