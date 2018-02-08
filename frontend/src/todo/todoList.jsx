import React from 'react'
import IconButton from '../templates/iconButton'

export default props => { 

    const renderRows = () => {
        // se a lista estiver vazia - seta um array vazio
        const list = props.list || []

        return list.map(todo => 

            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' 
                       onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Minhas Tarefas </th>
                    <th>Açoes </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}