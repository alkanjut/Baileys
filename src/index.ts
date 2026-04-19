console.log(`
\x1b[36m╔══════════════════════════════════════╗
\x1b[35m        Thank's For Using
\x1b[33m        Alkanjut Baileys ✨
\x1b[36m╚══════════════════════════════════════╝

\x1b[32mThis Baileys Support All WhatsApp Prototype 🎄

\x1b[34mOWNER :
\x1b[37mt.me/alkanjutReal
\x1b[37mt.me/CrownBancet
\x1b[0m
`)

import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
