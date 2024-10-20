//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive2",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname} I'm alive now*

*╭─「 ALIVE 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ꜱᴀʜᴀꜱ-ᴍᴅ
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ
*╰──────────●●►*
*╭──────────●●►*
*│ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533
*│ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴:* https://www.youtube.com/@Sahas_Tech
*╰──────────●●►*

*Type .menu to get bot user menu*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*
`
await conn.sendMessage(from, {
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363316527550485@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: 'ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029Val6g7EBadmagKxuYi1R" ,
thumbnailUrl: `https://i.imgur.com/2p7gHUD.jpeg` ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
