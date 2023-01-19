const Router = require('express');
const {
        listarUsuarios,
        crearUsuario,
        actualizarUsuario,
        eliminarUsuario,
        validar,
        consultarUsuario
    } = require ('../controllers/usuario')
const router = new Router();

router.get('/listar',listarUsuarios);

router.post('/crear' ,crearUsuario);

router.post('/actualizar', actualizarUsuario);

router.post('/eliminar', eliminarUsuario);

router.post('/validar',validar);

router.get('/consultar/:username',consultarUsuario);


module.exports = router;

