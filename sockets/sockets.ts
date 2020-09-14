import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
  client.on('disconnect', () => {
    console.log(`client disconnect with ip : ${client.handshake.address}, discconnect-hour : ${client.handshake.time}`);
  })
}

//listen message
export const message = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: { from: string, message: string }, callback) => {
    console.log('Mensaje Recibido', payload);
    io.emit('message-new', payload);
  })
}