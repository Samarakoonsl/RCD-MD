//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1oOGxjWTVVQS9SU1dGeHFQeGlCQTVVQUd3L0QxRzNocVdoZ1VRYjFYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JtL091VUM5RG4zUlpLUVkvUkJMUEVKMTZBbnlQWDlRR2xtbTlJWjFrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Qmo4aW05R0xwUERoR09WMmhIZHNjVEkxUGVGc1pCbFZnQVZsWG1YN0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQZVkrOGpDQ3ZXZkx0WE04ZldheFFHQWpYVHhTL3ZId3FodUgxcmtkOVJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNV095VE5XM3NQZm00cTdxL1pUa1pCV0dPUzNBd0h5cXYxVHl0YlY4MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRuU0sybFlOUHBEVXY1Y1NaODFVd3NzWEcrMitvVWVIeXltRS9vRkpnU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0svajFYdzE5U0NrQXlINlArYWVzTnhkaVNqYkRBSmZZRmNtV2xJSTRIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzZQSytDSHdXdzVwUHR2N1Nvdm9Wb3dhL05Mcng3RVRKWFpDd3JQUkMzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktsMjVqU3RybEZVMHNlaHN1QVhERUVsQS8wVDh5bkRjMDdsZ290MjlIT3EyT2l4NGdtZmhYUWVqaWVQRThCZGd3c0svYVN3NVZpSmJ6TUI0RDN4eUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoicmdVQ0FLNmV4ZHowTW4wUExKY1p4Z3RFNnNWZWNJQ3VCOTh6VlNZUnBHVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcxNDg2NzI1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MUMzOThGMDM5QjU5NkM3QjY3MDkwMDQzRDdBNTVFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwOTAxNzc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcxNDg2NzI1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2NjUxN0NERjEwOUE2QUQ0QTI1QUVDRjYwM0NGMDg5MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwOTAxNzc3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTd2k2Z0J5dVJjbUwwWVNYYjZMMkpRIiwicGhvbmVJZCI6ImI5NDRjM2Q5LTJiNzAtNDY0MS1iNWZjLWI0NjUwZGFkYTkxZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZ3JUMkxXYmdOVG4vcXB6SlhmR25BWiswU0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1pscnZOR1U0eFNnMGF2RWpxaDFnTm1PWDhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE3WU43QUtCIiwibWUiOnsiaWQiOiI5NDcxNDg2NzI1MDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmIhKQUNLIFNQQVJST1fwn5iIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMm45YzBFRUlMQnk3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUStBSmNBd2VZUkF1eEYzazFwOSs0ZU5BaFpqdnorQllBa1E2Z1ErbnprPSIsImFjY291bnRTaWduYXR1cmUiOiJ4Sm5XNUhodHZIbFh2WlQzYmRiVXVFRDJtbklCa1pNbi9CNUtoMDF1MHQrOFY1QW5iNDlWMHBYUGV4UzJtSlhORUFpclBoMGNSelBJc3hCdUpuWlpCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiakpESnFNYWtacFNoL3lBQURhZmZYc2pkZytBUHJMNHFyZkovdHJueWFORGVnZnBoRmRkRFp6TExuL1lKdmpLN2R3cGxjeFQ1Z2orQkVjbzVMaDVvQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNDg2NzI1MDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllFUGdDWEFNSG1FUUxzUmQ1TmFmZnVIalFJV1k3OC9nV0FKRU9vRVBwODUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5MDE3NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDJMIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
