const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙱𝚄 𝚇 𝙳𝙰𝙵𝙽𝙴 ⚙️ ${pesan}`;
  let teks = `𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 𝐇𝐩𝐭𝐚𝐬!!\n\n ${oi}\n\n 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐞𝐬:\n\n`;
  for (const mem of participants) {
    teks += `⚙️ @${mem.id.split('@')[0]}\n`;
  }
  teks += ` 𝙱𝚄 𝚇 𝙳𝙰𝙵𝙽𝙴 ⚙️`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
