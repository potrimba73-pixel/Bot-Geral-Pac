import { logExternalMemberLeave } from "../services/externalLogs.js";

export async function handleGuildMemberRemove(member, client) {
  try {
    await logExternalMemberLeave(member);
  } catch (e) {}
}
