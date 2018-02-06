import React from 'react'

export default  props => {

    // button por estar hide ou show 

    if(props.hide){
        return null
    } else {
        return (
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-'+props.icon}> </i>
        </button>
        )
    }

}