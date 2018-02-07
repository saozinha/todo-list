// centraliza os cadastro da aplicacao
import React, { Component } from 'react' 

import PageHeader from '../templates/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const url =  "htt://localhost:3003/api/todos"

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { tarefa : '', list: [] }

        // realizar uma amarracao para garantir que o this é o componente atual
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        // alterar o estado atual - state 
        this.setState({...this.state, tarefa: e.target.value})
    }

    handleAdd() {
        const tarefa = this.state.tarefa
        // axios - trata a api - baseado em promises
        axios.post(url, {tarefa})
        .then(resp => 
            console.log('OK'))
    }

    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
               <TodoForm tarefa={this.state.tarefa}
                         handleChange={this.handleChange}
                         handleAdd={this.handleAdd}/>
               <TodoList />
            </div>
        )
    }
}
