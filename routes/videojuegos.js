const Router = require('express');
const {
    listar,
    registrar,
    actualizar,
    eliminar,
    consultar
    } = require ('../controllers/videojuegos')
const router = new Router();

router.get('/listar',listar)

router.post('/registrar',registrar)
 
router.post('/actualizar',actualizar)

router.post('/eliminar',eliminar)

router.get('/consultar/:descripcion',consultar)

module.exports = router;

