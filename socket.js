//Objeto para configurar Socket.io
let socketConfig = {};

socketConfig.configure = (io) => {
    //Aquí se configura socket.io

    //Manejar evento de 'connection'
    io.on('connection', (socket) => {
        //socket nos permite manipular la conexión entablada
        console.log("User connected");

        socket.on('message.new', (message) => {
            console.log("message", message);

            //Emitir un evento a todos los clientes conectados
            io.emit('message.received', message);

            console.log("message sent to clients");
        });
    });
};

//Exportar objeto de configuración
module.exports = socketConfig;

