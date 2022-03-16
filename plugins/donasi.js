let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085706735450]
│ • Gopay [085706735450]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283869803330
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
