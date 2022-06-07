import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:8009})

wss.on("connection", (ws)=>{
    console.log(ws)
})
