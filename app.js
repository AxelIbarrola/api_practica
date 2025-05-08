let express = require('express')
let app = express()

const PORT = 4000

const operacionesRoutes = require('./src/routes/operaciones.routes')

app.use(express.json())

app.use('/', operacionesRoutes)

app.listen(PORT || 3000, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})