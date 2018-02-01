import   React   from 'react'
import props from '../main/routes';

export default props => (
    <header className='page-header'>
        <h2>{props.name} <small> {props.small} </small> </h2>
    </header>
)
