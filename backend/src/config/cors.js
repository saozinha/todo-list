module.exports = function(req, res, next) { // res = response
    res.header('Access-Control-Allow-Origin', '*') // usando o asterisco permitir qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() // vai para o proximo middle ate que aja uma resposta
}
