module.exports = function(req,res,next){
if (req.query.user == "Ada"|| req.query.user == "Greta" || req.query.user == "Vim" || req.query.user == "Tim" ) {
    next()
} else {
    res.send("No tienes los privilegios para ingresar")
}
}