// centraliza os cadastro da aplicacao
import React, { Component } from 'react' 

import PageHeader from '../templates/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

// nosso backend - o servidor rodando na porta 3003 - server.js
const url =  "http://localhost:3003/api/todos"

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description : '', list: [] }

        // realizar uma amarracao para garantir que o this é o componente atual
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh() {
        // get baseado no filtro de data - descrescente
        axios.get(`${url}?sort=-createdAt`)
        .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e) {
        // alterar o estado atual - state 
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        // axios - trata a api - baseado em promises
        axios.post(url, {description})
        .then(resp =>  this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${url}/${todo._id}`)
        .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
               
               <TodoForm description={this.state.description}
                         handleChange={this.handleChange}
                         handleAdd={this.handleAdd}/>

               <TodoList list={this.state.list} 
                        handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
