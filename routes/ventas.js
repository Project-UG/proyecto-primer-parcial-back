const Router = require('express');
const {
    listar,
    registrar,
    detalles,
    reporte
    } = require ('../controllers/ventas')
const router = new Router();

router.get('/listar',listar)

router.post('/registrar',registrar)
 
router.get('/detalles/:idcabecera',detalles)

router.get('/reporte',reporte)

module.exports = router;

