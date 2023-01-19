//const { raw } = require('express');
const {
    getVideoJuegos,
    guardarVideoJuego,
    actualizarVideo,
    eliminarVideoJuego,
    consultarVideo
    } =require('../dao/dao')


const listar = async (req,res)=>{
    const result = await getVideoJuegos();  
    res.json(result);
}

const registrar = async (req,res)=>{
    const video = req.body;
    const result = await guardarVideoJuego(video);  
    res.json(result);
}

const actualizar = async (req,res)=>{
    const video = req.body;
    const result = await actualizarVideo(video);  
    res.json(result);
}

const eliminar = async (req,res)=>{
    const video = req.body;
    const result = await eliminarVideoJuego(video);  
    res.json(result);
}

const consultar = async (req,res)=>{
    const descripcion = req.params.descripcion;
    const result = await consultarVideo(descripcion);  
    res.json(result);
}

module.exports = {
    listar,
    registrar,
    actualizar,
    eliminar,
    consultar

}