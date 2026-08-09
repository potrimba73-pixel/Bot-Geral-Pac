import { logExternalMemberJoin } from "../services/externalLogs.js";

export async function handleGuildMemberAdd(member, client) {
  try {
    await logExternalMemberJoin(member);
  } catch (e) {}
}
