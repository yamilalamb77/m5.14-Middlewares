const fs = require('fs');
/* const { nextTick } = require('process'); */
const userLog = (req,res,next) =>{
fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingreso a la ruta:${req.url}\n`)

next()
}

module.exports = userLog