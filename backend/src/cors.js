//midlew
module.exports = function(req, res, next){
    //cabeçalho cors

    //permitir acesso de qualquer origem
    res.header('Access-Control-Allow-Origin', '*')
    //controles de acesso
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //função pra passar do cabeçalho e não travar a aplicação
    next()
}