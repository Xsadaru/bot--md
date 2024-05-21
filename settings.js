//base by b4udrogan
//re-upload? recode? copy code? give credit ya :)
//YouTube: @b4udrogan
//Instagram: ikonkhan
//Telegram: t.me/b4udrogab
//GitHub: @ikonkhan
//WhatsApp: +923070051625
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@b4udrogan

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: b4udrogan" //ur yt chanel name
global.socialm = "GitHub: ikonkhan" //ur github or insta name
global.location = "pakistan, Rawalpindi, liquat bagh" //ur location

//new
global.botname = 'B4U DROGAN V10' //ur bot name
global.ownernumber = '923355911210' //ur owner number
global.ownername = 'B4U DROGAN' //ur owner name
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/C1OMu4mxPR76qlgbTsaelu"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://youtube.com/@b4udrogan' //script link
global.packname = "Sticker By"
global.author = "B4U DROHAN\n\n+923070051625"
global.creator = "923355911210@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923355911210"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v5' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '92' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})