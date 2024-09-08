const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "djV3nYSB#-IV0yRpYoQ6fCFsZmztSdcyi658Rf7ZJAzlpvTzWirU",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
