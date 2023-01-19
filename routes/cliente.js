const Router = require('express');
const {
    listar,
    registrar,
    actualizar,
    eliminar,
    consultar
    } = require ('../controllers/cliente')
const router = new Router();

router.get('/listar',listar)

router.post('/registrar',registrar)
 
router.post('/actualizar',actualizar)

router.post('/eliminar',eliminar)

router.get('/consultar/:apellidos',consultar)

module.exports = router;

