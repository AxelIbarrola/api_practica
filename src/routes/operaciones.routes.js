const router = require('express').Router()
const { getOperacion} = require('../controllers/operaciones.controller')

router.post('/operaciones',
    getOperacion
)

module.exports = router