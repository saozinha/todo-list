const Todo = require('./todo')

// envia, atualiza, recupera e remove da base ( meu webservice) 
Todo.methods(['get', 'post', 'put', 'delete']) 
 // o update ao new true retorna o objeto atualizado
Todo.updateOptions({new: true, runValidators: true})
// sem a linha updateOption o update por padrao retorna o objeto antigo

module.exports = Todo 