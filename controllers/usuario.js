const { raw } = require('express');
const {
        getUsuarios,
        guardar,actualizar,eliminar, validarLogin,consultar
    } =require('../dao/dao')


const listarUsuarios = async (req,res)=>{
    const result = await getUsuarios();    
    res.json(result);
}

const crearUsuario = async (req,res)=>{
    const usuario = req.body;
    const result = await guardar(usuario);
    res.json(result);
}

const actualizarUsuario = async (req,res)=>{
    const usuario = req.body;
    const result = await actualizar(usuario);
    res.json(result);
}

const eliminarUsuario =async (req,res)=>{
    const usuario = req.body;
    const result = await eliminar(usuario);
    res.json(result);
}

const validar = async (req,res)=>{
    const usuario = req.body;
    const result = await validarLogin(usuario);
    res.json(result);
}

const consultarUsuario = async(req,res) =>{
    const username = req.params.username;
    const result = await consultar(username);
    res.json(result);
}



module.exports = {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    validar,
    consultarUsuario
}