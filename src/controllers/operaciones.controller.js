const  operaciones = require('../scripts/functions')

const getOperacion = (req, res) => {
    let resultados = []
    const solicitud = req.body

    solicitud.forEach(element => {

        let val1 =  element["op1"]
        let val2 = element["op2"]
        let fun = element["fn"]
        let funcion = operaciones[fun]
        let result = funcion(val1, val2)

        resultados.push({
            "op1": val1,
            "op2": val2,
            "fn": fun,
            result
        })
    });

    res.json(resultados)
}

module.exports = { getOperacion }