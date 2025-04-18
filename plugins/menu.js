const { cmd, commands } = require('../command');
const config = require('../config');

function getUptime() {
    let totalSeconds = process.uptime();
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
}

function getCurrentDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

const uptime = getUptime();
const currentDate = getCurrentDate();
const currentTime = getCurrentTime();

module.exports = { getUptime, uptime, getCurrentDate, currentDate, getCurrentTime, currentTime };

cmd({
    pattern: "menu",
    desc: "Display the bot menu",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const menuText = `
╔═════════════════╗
║ 🔥 𝑹𝑨𝑺𝑯 𝑴𝑫⚡
╠══════════════════╣
║ 💐 𝑯𝒆𝒍𝒍𝒐, 𝒅𝒆𝒂𝒓 ${pushname}
║ 🫀 𝑫𝒂𝒕𝒆: ${currentDate}
║ ⏳𝑻𝒊𝒎𝒆: ${currentTime}
║📁 𝑼𝒑𝒕𝒊𝒎𝒆: ${uptime}
║🗿 𝑶𝒘𝒏𝒆𝒓: ${config.OWNER_NAME}
║ 🔑𝑴𝒐𝒅𝒆: ${config.MODE}
╚══════════════════╝

『 MAIN MENU 』
╭──────────────
┃ .alive
┃ .alive2
┃ .menu
┃ .ping
┃ .system
┃ .help
╰──────────────

『 DOWNLOAD MENU 』
╭──────────────
┃ .song <query>
┃ .video <query>
┃ .fb <link>
┃ .mediafire <link>
┃ .ig <link>
┃ .mfire <url>
┃ .gdrive <url>
┃ .tweet <url>
┃ .speak <query>
┃ .lyrics <song|artist>
┃ .weather <location>
┃ .gitclone <url>
╰──────────────

『 SEARCH MENU 』
╭──────────────
┃ .yts <query>
┃ .img <query>
╰──────────────

『 GROUP MENU 』
╭──────────────
┃ .grouplink
┃ .kickall
┃ .kickall2
┃ .kickall3
┃ .add
┃ .remove
┃ .kick
┃ .promote
┃ .demote
┃ .dismiss
┃ .revoke
┃ .setgoodbye
┃ .setwelcome
┃ .delete
┃ .getpic
┃ .ginfo
┃ .disappear on
┃ .disappear off
┃ .disappear 7D,24H
┃ .allreq
┃ .updategname
┃ .updategdesc
┃ .joinrequests
┃ .senddm
┃ .nikal
┃ .mute
┃ .unmute
┃ .lockgc
┃ .unlockgc
┃ .invite
┃ .tag
┃ .hidetag
┃ .tagall
┃ .tagadmins
╰──────────────

『 OWNER MENU 』
╭──────────────
┃ .shutdown
┃ .setpp
┃ .block
┃ .unblock
┃ .clearchats
┃ .restart
┃ .broadcast
╰──────────────

『 TOOLS MENU 』
╭──────────────
┃ .ai <query>
┃ .news <query>
┃ .hack
┃ .trt <info>
┃ .shorten <url>
┃ .fact
┃ .dalle <query>
┃ .ig <url>
┃ .pint <query>
┃ .insult
┃ .meme
┃ .url
╰──────────────

『 STALK MENU 』
╭──────────────
┃ .ghstalk <username>
╰──────────────

『 RELIGION MENU 』
╭──────────────
┃ .bible <chapter>:<verse>
┃ .quran <surah number>
╰──────────────

═════════════════════════════
𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𝑹𝑨𝑺𝑯 𝑻𝑬𝑪𝑯
𝑱𝑶𝑰𝑵 𝑶𝑼𝑹 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 𝑪𝑯𝑨𝑵𝑵𝑬𝑳:
https://whatsapp.com/channel/0029Vb4rsUd1CYoZLmQ8o82R
Type .repo to get bot info and deploy
═════════════════════════════╝`;

        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/FLSgNhW9/Free.png` }, 
            caption: menuText 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

