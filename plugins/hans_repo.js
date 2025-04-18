const config = require('../config');
const { cmd, commands } = require('../command');
const fetch = require('node-fetch'); // For Node <18. For Node 18+, you can use global fetch.

cmd({
    pattern: "ghub",
    alias: ["repo", "github"],
    desc: "Stalker Ghub: Show bot repository info from GitHub",
    category: "main",
    react: "💻",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Fetch repository data from GitHub API
        const response = await fetch('https://api.github.com/repos/haroldmth/Hans_md', {
            headers: { 'User-Agent': 'Node.js' }
        });
        const data = await response.json();

        if (data.message) {
            return reply(`Error fetching GitHub info: ${data.message}`);
        }

        // Create a fancy, stylized caption message with repo details and bot info
        let caption = `╭━━━━━━━━━━━━━━━━━━━━━╮
┃  𝓖𝓲𝓽𝓗𝓾𝓫 𝓡𝓮𝓹𝓸: Https://github.com/haroldmth/Hans_md
┃  📌 *𝓝𝓪𝓶𝓮:* ${data.full_name}
┃  📝 *𝓓𝓮𝓼𝓬𝓻𝓲𝓹𝓽𝓲𝓸𝓷:* ${data.description || "No description provided."}
┃  🌟 *𝓢𝓽𝓪𝓻𝓼:* ${data.stargazers_count}
┃  🍴 *𝓕𝓸𝓻𝓴𝓼:* ${data.forks_count}
┃  🐞 *𝓘𝓼𝓼𝓾𝓮𝓼:* ${data.open_issues_count}
┃  👁 *𝓦𝓪𝓽𝓬𝓱𝓮𝓻𝓼:* ${data.watchers_count}
┃  💻 *𝓛𝓪𝓷𝓰𝓾𝓪𝓰𝓮:* ${data.language || "Unknown"}
┃  📆 *𝓒𝓻𝓮𝓪𝓽𝓮𝓭:* ${new Date(data.created_at).toLocaleDateString()}
┃  🔄 *𝓤𝓹𝓭𝓪𝓽𝓮𝓭:* ${new Date(data.updated_at).toLocaleDateString()}
┃
┃  𝓡𝓮𝓹𝓸 𝓛𝓲𝓷𝓴: https://github.com/haroldmth/Hans_md
┃
┃  🤖 *Bot:* HANS BYTE MD
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

       𓆩 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒉𝒂𝒏𝒔 𝒃𝒚𝒕𝒆 𓆪`;

        // Send image with the stylized caption
        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/FLSgNhW9/Free.png" },
            caption: caption 
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
