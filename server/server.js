require('dotenv').config();
const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.paths = {
            usuario:       '/api/usuario',
            videojuegos:   '/api/videojuego',
            cliente:       '/api/cliente',
            ventas:        '/api/ventas'
        }
        this.server = require('http').createServer(this.app);
        

        this.middlewares();
        this.routes();
    }
    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.paths.usuario, require('../routes/usuario'));
        this.app.use( this.paths.videojuegos, require('../routes/videojuegos'));
        this.app.use( this.paths.cliente, require('../routes/cliente'));
        this.app.use( this.paths.ventas, require('../routes/ventas'));
        

    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
    

}
module.exports = Server;
