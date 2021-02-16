module.exports = (socket: any) => {
   socket.on('new message', () => {
        console.log('filler.')
   });
};