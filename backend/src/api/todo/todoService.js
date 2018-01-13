const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // ja e a base do meu webservice 

Todo.updateOptions({new: true, runValidators: true}) // o update ao new true retorna o objeto atualizado
// sem a linha updateOption o update por padrao retorna o objeto antigo

module.exports = Todo 