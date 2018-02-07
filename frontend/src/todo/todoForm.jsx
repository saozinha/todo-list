import React from 'react'; 

import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'
export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
                <input id='tarefa' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    value={props.tarefa}>
                </input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
            onClick={props.handleAdd}>
            </IconButton> 
        </Grid>
    </div>
)
