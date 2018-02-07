import React from 'react'

import Condicional from '../templates/condicional'

export default  props => (

    // button por estar hide ou show 
    <Condicional test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-'+props.icon}> </i>
        </button>
    </Condicional>
)