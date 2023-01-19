//const { raw } = require('express');
const {
    getClientes,
    consultarCliente,
    guardarCliente,
    actualizarCliente,
    eliminarCliente
    } = require('../dao/dao')


const listar = async (req,res)=>{
    const result = await getClientes();  
    res.json(result);
}

const registrar = async (req,res)=>{
    const cliente = req.body;
    const result = await guardarCliente(cliente);  
    res.json(result);
}

const actualizar = async (req,res)=>{
    const cliente = req.body;
    const result = await actualizarCliente(cliente);  
    res.json(result);
}

const eliminar = async (req,res)=>{
    const cliente = req.body;
    const result = await eliminarCliente(cliente);  
    res.json(result);
}

const consultar = async (req,res)=>{
    const apellidos = req.params.apellidos;
    const result = await consultarCliente(apellidos);  
    res.json(result);
}

module.exports = {
    listar,
    registrar,
    actualizar,
    eliminar,
    consultar
}