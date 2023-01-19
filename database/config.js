const {Client} = require('pg')

const cliente = new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    database:"bd_videojuegos",
    password:"postgres",
});

// cluster producción
/*const cliente = new Client({
    host:"postgresql-105586-0.cloudclusters.net",
    port:10211,
    user:"admin",
    database:"db_videojuegos",
    password:"dn19935a",
});*/

const getConeccion = () =>{
    
    cliente.connect();
    return cliente;
}

module.exports = {
    getConeccion
}