const socketController = (socket) => {
    socket.on('confirmar-datos',(payload)=>{
        socket.broadcast.emit('recibir-notificaciones',payload);    
    })

    socket.on('confirmar-envio',(payload)=>{
        socket.broadcast.emit('recibir-envio',payload);    
    })

    socket.on('confirmar-error-flota',(payload)=>{
        socket.broadcast.emit('recibir-error-flota',payload);    
    })
}

module.exports = {
    socketController
}

