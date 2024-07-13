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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0J5ZEZmK0xZclJKeGpVbmJLZmdPWndQc3gvTEp6Ry9OWFdlWDBuTzgzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFNpOWZMWnR0aEZwdWVPNENJbzRnR2ZxV0lnNmdKTmlIUHkvOXg2cS9VOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTFhTWlpUMlkvRi96ZERoaHBHWkRFUkZWekI0N2grU2pxN3pDZi9EZ2w4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIc3IxSFRINWozMlQ0Njl5SmU3TThyeTBpajh4cW1yRTByTXBSZXZ5Z0hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIdzgrdUQwS2xSczhhUHEyOEY0L2NvUW02U0NvaitITC9seWYrcWRkRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN3czJ1MXM0REMybEtlNmtyczF6RjREV2t1bUFFS3Z1NVMydjFGOVVNU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lBcjhoa3RVeFBSeGtKRytpWXUxc0xTZ1doMC9GSFp0U2c1M3JBYWxHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhwREF1cDAxaFVWL0NBcEV4eU1aOW9vakJlSWVFMm1RUGFrTC9vd3F3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpUY3dIQ05YdHVxMVhqcHBuWGZ4L1VkQUo4a1haRS9BTC96bTBhSVF3bitpcXZ1MkRUVDVYSDd5dVBvamdRNHRmRW16M2hrazdwT1ZsQmpqeVZFcWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6ImR3UVJEVGl3YjU2UWRWdW5PNkRnNHFQMUNCU09hUWtyT0hXaU1RNThPYlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTQ4NjcyNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUM2QTRGRjgzOENGNEZBNEU2MEVCNjk1MkY2NkMxMTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDg5Njk3Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTQ4NjcyNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0M0NEFFMDFFNkVGNDIxRTI0OTI0MTAwQzc3RjlGQjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDg5Njk3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieTl0RUE3bnNRYmlJTEk2SjJNUG9EdyIsInBob25lSWQiOiI4NDkyY2I5Ny1lNzM2LTQ3ZjUtOTU0NC01NGRhNWQ5ZWFkZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS25wZjZuaitoTW9IdFErUDBVcU5WM0JuTjY4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKMVZ6TkF5N0RBZWNkNkRGMWlhcFJlL2kzRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTOE0xRzlDNiIsIm1lIjp7ImlkIjoiOTQ3MTQ4NjcyNTA6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5iISkFDSyBTUEFSUk9X8J+YiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXluOWMwRUVMMmJ5N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1ErQUpjQXdlWVJBdXhGM2sxcDkrNGVOQWhaanZ6K0JZQWtRNmdRK256az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjByV3U5anN1UTRjTnZKU2g3dHNFTStreDhGcysrSmhLRGh2M1FoWlFqTUtJQlVNUHAxbTU3bDRaTU9wazNSbHNMT1o3K3JDU0VkUGF2cDFIMnVZQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjlkbGV2UTN1QmtDVlBHN0ZyVDc0b1pRSXdacDRKalg2SUkxZXNuZ0s5TVNBdXh0cFpjZ04wcG0zU2k3TFQzZngyUWJFQ1VXT1dpaHRzeU9GSDlaQ2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTQ4NjcyNTA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRVBnQ1hBTUhtRVFMc1JkNU5hZmZ1SGpRSVdZNzgvZ1dBSkVPb0VQcDg1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODk2OTcwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgySiJ9"
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
