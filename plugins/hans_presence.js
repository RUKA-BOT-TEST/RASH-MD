const fs = require('fs');
const path = require('path');
const config = require('../config')
const {cmd , commands} = require('../command')


// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});

//  Always Online / Available
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.ALWAYS_ONLINE === 'true') {
        await conn.sendPresenceUpdate('available', from); // Explicitly show online
    } else {
        await conn.sendPresenceUpdate('unavailable', from); // Explicitly set to offline
    }
});

