const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // ja e a base do meu webservice 
 // o update ao new true retorna o objeto atualizado
Todo.updateOptions({new: true, runValidators: true})
// sem a linha updateOption o update por padrao retorna o objeto antigo

module.exports = Todo 