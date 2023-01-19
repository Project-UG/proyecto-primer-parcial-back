const { getConeccion } = require('../database/config')
const cliente = getConeccion();


const getUsuarios = async ()=>{
    try{
       
        let usuarios = await cliente.query("select * from usuario order by id");    
        return usuarios.rows;
        
    }
    catch(err){
        console.log("Error al consultar usuarios "+err);
        return null;
    }
}

const obtenerId = async ()=>{
    try{
        let { rows } = await cliente.query("select max(id)+1 as resultado from usuario");
        
        console.log(rows[0].resultado);
        
        return (rows[0].resultado!=null?
            rows[0].resultado:1);
        
        
    }
    catch(err){

    }
}

const validarLogin = async (usuario)=>{
    
    let result ;

    try{
        result = await cliente.query("select * from usuario where username = '"+usuario.username+"' and password = '"+usuario.password+"'");
        
        if(result.rows.length == 0){
            return {
                estado:"error",
                mensaje:"Nombre de usuario o clave son incorrectos"
            }
        }
    
    }

    catch(error){
        return {
            estado:"error",
            mensaje:"Ocurrió un error ténico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        usuario:result.rows[0]
    }
}

const guardar = async (usuario)=>{
    try{
        let id = await obtenerId();
        
        await cliente.query("insert into usuario (id,username,password,correo)"
                                                +" values ("+id+",'"
                                                +usuario.username+"', '"
                                                +usuario.password+"','"
                                                +usuario.correo+"')"
                                            );
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error ténico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se creó el usuario correctamente"
    }
   
}

const actualizar = async (usuario)=>{
    try{
        
        await cliente.query("update usuario "+
                                                "set username = '"+usuario.username+"',"
                                                +" password = '"+usuario.password+"',"
                                                +" correo = '"+usuario.correo+"'"
                                                +" where id = "+usuario.id);
                                            
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Usuario actualizado con éxito"
    }
   
}

const eliminar = async (usuario)=>{
    try{
        
        await cliente.query("delete from usuario where id = "+usuario.id);
                                            
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se ha eliminado el usuario con éxito"
    }
   
}

const consultar = async (username)=>{
    try{
        
        let datos = await cliente.query("select * from usuario where username = '"+username+"'");
        return datos.rows;
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }
}

// videojuegos

const obtenerIdVideo = async ()=>{
    try{
        let { rows } = await cliente.query("select max(idvideo)+1 as resultado from video_juego");
        
        console.log(rows[0].resultado);
        
        return (rows[0].resultado!=null?
            rows[0].resultado:1);

    }
    catch(err){

    }
}

const getVideoJuegos = async ()=>{
    try{
       
        let videojuegos = await cliente.query("select * from video_juego order by idvideo");    
        return videojuegos.rows;
        
    }
    catch(err){
        console.log("Error al consultar videojuegos "+err);
        return null;
    }
}

const guardarVideoJuego = async (video)=>{
    try{
        let id = await obtenerIdVideo();
        console.log(video);
        await cliente.query("insert into video_juego (idvideo,descripcion,precio,proveedor,stock)"
                                                +" values ("+id+",'"
                                                +video.descripcion+"', '"
                                                +video.precio+"','"
                                                +video.proveedor+"',"
                                                +video.stock+" )"
                                            );
    }
    catch(err){
        console.log(err);
        return {
            estado:"error",
            mensaje:"Ocurrió un error ténico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se registró el video juego correctamente"
    }
   
}

const actualizarVideo = async (video)=>{
    try{
        
        await cliente.query("update video_juego "+
                                                "set descripcion = '"+video.descripcion+"',"
                                                +" precio = "+video.precio+","
                                                +" proveedor = '"+video.proveedor+"'"
                                                +" where idvideo = "+video.idvideo);
                                            
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se ha actualizado el videojuego con éxito"
    }
   
}

const eliminarVideoJuego = async (video)=>{
    try{
        await cliente.query("delete from video_juego where idvideo = "+video.idvideo);                                    
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se ha eliminado el videojuego con éxito"
    }
   
}

const consultarVideo = async (descripcion)=>{
    try{
        let datos = await cliente.query("select * from video_juego where descripcion like '%"+descripcion+"%'");
        return datos.rows;
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }
}

// Clientes

const obtenerIdCliente = async ()=>{
    try{
        let { rows } = await cliente.query("select max(idcliente)+1 as resultado from cliente");
        
        console.log(rows[0].resultado);
        
        return (rows[0].resultado!=null?
            rows[0].resultado:1);

    }
    catch(err){

    }
}

const getClientes = async ()=>{
    try{
       
        let clientes = await cliente.query("select * from cliente order by idcliente");    
        return clientes.rows;
        
    }
    catch(err){
        console.log("Error al consultar clientes "+err);
        return null;
    }
}

const guardarCliente = async (paylaod)=>{
    try{
        let id = await obtenerIdCliente();
      
        await cliente.query("insert into cliente (idcliente,apellidos,nombres,cedula,direccion,telefono)"
                                                +" values ("+id+",'"
                                                +paylaod.apellidos+"', '"
                                                +paylaod.nombres+"','"
                                                +paylaod.cedula+"','"
                                                +paylaod.direccion+"','"
                                                +paylaod.telefono+"')"
                                            );
    }
    catch(err){
        console.log("al registrar cliente "+err)
        return {
            estado:"error",
            mensaje:"Ocurrió un error ténico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se registró el cliente correctamente"
    }
   
}

const actualizarCliente = async (payload)=>{
    try{
        
        await cliente.query("update cliente "+
                                "set apellidos = '"+payload.apellidos+"',"
                                +" nombres = '"+payload.nombres+"',"
                                +" cedula = '"+payload.cedula+"' , "
                                +" direccion = '"+payload.direccion+"' , "
                                +" telefono = '"+payload.telefono+"'"
                                +" where idcliente = "+payload.idcliente);
                                            
    }
    catch(err){
        console.log(err);
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se ha actualizado el cliente con éxito"
    }
   
}

const eliminarCliente = async (payload)=>{
    try{
        await cliente.query("delete from cliente where idcliente = "+payload.idcliente);                                    
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Se ha eliminado el cliente con éxito"
    }
   
}

const consultarCliente = async (apellidos)=>{
    try{
        let datos = await cliente.query("select * from cliente where apellidos like '%"+apellidos+"%'");
        return datos.rows;
    }
    catch(err){
        return {
            estado:"error",
            mensaje:"Ocurrió un error técnico , Notificar a Desarrollo"
        }
    }
}

// Ventas

const getIdVentas = async ()=>{
    try{
        let { rows } = await cliente.query("select max(idcabeceraventa)+1 as resultado from venta_cabecera");
        
        console.log(rows[0].resultado);
        
        return (rows[0].resultado!=null?
            rows[0].resultado:1);

    }
    catch(err){

    }
}

const getIdDetalleVenta = async ()=>{
    try{
        let { rows } = await cliente.query("select max(iddetalleventa)+1 as resultado from venta_detalle");
        
        console.log(rows[0].resultado);
        
        return (rows[0].resultado!=null?
            rows[0].resultado:1);

    }
    catch(err){

    }
}

const getVentas = async ()=>{
    try{
       
        let ventas = await cliente.query("select * from venta_cabecera order by idcabeceraventa");    
        return ventas.rows;
        
    }
    catch(err){
        console.log("Error al consultar clientes "+err);
        return null;
    }
}

const getDetallesPorVenta = async (idcabecera)=>{
    try{
       
        let detalles = await cliente.query("select * from venta_detalle where idcabeceraventa =  "+idcabecera);    
        return detalles.rows;
        
    }
    catch(err){
        console.log("Error al consultar clientes "+err);
        return null;
    }
}

const guardarVenta = async (venta , detalles)=>{
    try{
        let id = await getIdVentas();
        let idDetalle = await getIdDetalleVenta();

        await cliente.query("insert into venta_cabecera (idcabeceraventa,idcliente,fecha,idusuario,subtotal,iva,total)"
                                                +" values ("+id+","
                                                +venta.idcliente+", '"
                                                +venta.fecha+"',"
                                                +venta.idusuario+","
                                                +venta.subtotal+","
                                                +venta.iva+","
                                                +venta.total+")"
                                            );
        let i = idDetalle;                                    
        detalles.forEach(async (detalle) => {

            await cliente.query("insert into venta_detalle (iddetalleventa,idcabeceraventa,idvideojuego,cantidad)"
                                            +" values ("+i+","
                                                +id+", "
                                                +detalle.idvideojuego+","
                                                +detalle.cantidad+")"
                                            );
            i++;
        });
    }
    catch(err){
        console.log("Error : "+err);
        return {
            estado:"error",
            mensaje:"Ocurrió un error ténico , Notificar a Desarrollo"
        }
    }

    return {
        estado:"ok",
        mensaje:"Venta registrada con éxito"
    }
   
}

const getReporte = async(fecha)=>{
    try{
        const result = await cliente.query("select v.descripcion as juego, sum(vd.cantidad) as ventas from video_juego v " 
                                    +"inner join venta_detalle vd on vd.idvideojuego = v.idvideo "
                                    +"inner join venta_cabecera vc on vc.idcabeceraventa = vd.idcabeceraventa "
                                    +" GROUP BY v.descripcion");

        return result.rows;
    }
    catch(err){
        console.log(err);
        return {
            estado:"error",
            mensaje:"Ha ocurrido un error técnico , Notificar a Desarollo"
        }
    }
}

module.exports = {
    getUsuarios,
    guardar,
    actualizar,
    eliminar,
    validarLogin,
    consultar,

    // Videojuegos
    getVideoJuegos,
    guardarVideoJuego,
    actualizarVideo,
    eliminarVideoJuego,
    consultarVideo,

    // Clientes
    getClientes,
    consultarCliente,
    guardarCliente,
    actualizarCliente,
    eliminarCliente,

    // Ventas
    getVentas,
    guardarVenta,
    getDetallesPorVenta,
    getReporte

}