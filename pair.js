const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function GiftePair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let GiftedMd = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Chrome", "Linux", "20.0.04" ],
             });
             if(!GiftedMd.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await GiftedMd.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            GiftedMd.ev.on('creds.update', saveCreds)
            GiftedMd.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionXeon = fs.readFileSync('./session/creds.json');
                    const audioxeon = fs.readFileSync('https://telegra.ph/file/57ce4164c306de3082fe5.mp4');
                    GiftedMd.groupAcceptInvite("Kjm8rnDFcpb04gQNSTbW2d");
				const xeonses = await GiftedMd.sendMessage(GiftedMd.user.id, { document: sessionGifted, mimetype: `application/json`, fileName: `creds.json` });
				GiftedMd.sendMessage(GiftedMd.user.id, {
                    audio: audioxeon,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: xeonses
                });
				await GiftedMd.sendMessage(GiftedMd.user.id, { text: `*_🛑Do not share this file with anybody_*\n\n© *_Subscribe_* www.youtube.com/@giftedtechnexus *_on Youtube_*` }, {quoted: xeonses});
        await delay(100);
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GiftedPair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Gifted()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
