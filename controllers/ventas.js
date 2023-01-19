//const { raw } = require('express');
const { response } = require('express');
const {
    getVentas,
    guardarVenta,
    getDetallesPorVenta,
    getReporte
    } = require('../dao/dao')


const listar = async (req,res)=>{
    const result = await getVentas();  
    res.json(result);
}

const registrar = async (req,res)=>{
    const { cabecera, detalle } = req.body;
    
    const result = await guardarVenta(cabecera,detalle);  
    res.json(result);
}

const detalles = async (req,res)=>{
    const idcabecera = req.params.idcabecera;
    const result = await getDetallesPorVenta(idcabecera);  
    res.json(result);
}

const reporte = async(req,res)=>{
    let date = new Date();
    const result = await getReporte(date);
    res.json(result);
}

module.exports = {
    listar,
    registrar,
    detalles,
    reporte
}