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
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        console.log(search)

        // get baseado no filtro de data - descrescente
        axios.get(`${url}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
 

    handleClear() { 
        this.refresh()
    }

    handleSearch() { 
        this.refresh(this.state.description)
    } 

    handleMarkAsDone(todo) {
        axios.put(`${url}/${todo._id}`, {...todo, done: true})
        .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${url}/${todo._id}` , {...todo, done: false})
        .then(resp => this.refresh(this.state.description))
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
        .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
               
               <TodoForm description={this.state.description}
                         handleChange={this.handleChange}
                         handleAdd={this.handleAdd}
                         handleSearch={this.handleSearch}
                         handleClear={this.handleClear} />

               <TodoList list={this.state.list} 
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending}
                        handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
