let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` _hallo @${m.sender.split`@`[0]}_\n\n_Saya disini ada apa?_`, `_Oeetss @${m.sender.split`@`[0]}_\n\n_Ada apa??_`, `_Ekhheemmm, Uhuk Ughhuk_`, `_Puuuiyy_`, `_Poom_`, `_Hadirrr_`, `_Yooossshhhh_`])}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
