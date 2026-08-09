import { CONFIG } from "./index.js";

export const TRUCKY_CONFIG = {
  companyId: "46961",
  accessToken: process.env.TRUCKY_ACCESS_TOKEN || "",
  baseURL: "https://api.truckyapp.com/v2",

  channels: {
    staff: "1146441860462690445",
    geral: "1200170007418642502",
    jornalPat: "1201616183435215008",
    logs: "1457144182954266634",
  },

  staffRoles: ["1200459899583336458"],
  vtcMemberRole: null,
  patentes: [],
  cargosBase: [],

  inatividade: {
    verificacaoAuto: false,
    diaVerificacao: 0,
    horaVerificacao: "20:00",
    diasAviso: 15,
    diasLimite: 30,
    diasLimpeza: 30,
    kmMinimoMes: 0,
  },

  mapa: {
    atualizarMinutos: 5,
    jogoPadrao: "ets2",
  },

  templates: {
    padrao: "template-padrao.png",
    fonte: "Arturo-Bold.ttf",
  },

  cores: {
    sucesso: 0x00ff00,
    perigo: 0xff0000,
    aviso: 0xffa500,
    info: 0x262af1,
    pat: 0x262af1,
    trucky: 0x3498db,
  },

  roles: {
    recrutamento: ["1200459899583336458"],
  },
};

export function isStaff(member) {
  return member.roles.cache.some(role =>
    TRUCKY_CONFIG.staffRoles.includes(role.id)
  );
}

export function isStaffPat(member) {
  return member.roles.cache.some(role =>
    TRUCKY_CONFIG.staffRoles.includes(role.id)
  );
}
