import React from 'react'
import IconButton from '../templates/iconButton'

export default props => { 

    const renderRows = () => {
        // se a lista estiver vazia - seta um array vazio
        const list = props.list || []

        return list.map(todo => 

            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone': ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' 
                       onClick={() => props.handleMarkAsDone(todo)}
                       hide={todo.done}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' 
                       onClick={() => props.handleMarkAsPending(todo)}
                       hide={!todo.done}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' 
                       onClick={() => props.handleRemove(todo)}
                       hide={!todo.done}>
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