PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Smarty_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-Smarty-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Smarty_Tech_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Smarty_Tech = Smarty_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Smarty_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Smarty_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Smarty_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Smarty_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Smarty_Tech.sendMessage(Pair_Code_By_Smarty_Tech.user.id, { text: '' + b64data });

               let SIGMA_MD_TEXT = `
*SMARTY-TECH CONNECTED SUCCESFULLY*
____________________________________
╔════◇
║『 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍𝙎』
║ ❒ *SMARTY-TECH* : https://wa.me/50940804440
║ ❒ *SMARTY-TECH* : https://wa.me/50941695706
╚════════════════════❒
╔═════◇
║ 『••• OWNER INFO •••』
║ ❒ Creator : 50940804440
║ ❒ This bot has been created to Smarty-Tech
╚════════════════════╝ 
 *MADE WITH 🤍*
 *MADE IN HAÏTI* 
___________________________________

Follow me on github : https://github.com/Deploybot6`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Smarty_Tech.user.id,{text:Smarty_Tech_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Smarty_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Smart_Tech_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Smarty_Tech_PAIR_CODE()
});
module.exports = router
