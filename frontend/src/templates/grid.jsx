import React , {Component} from 'react'
 

export default  class Grid extends Component {
    toCssClasses(numbers){
        const cols = numbers ? numbers.split(" ") : [];
        let classes = "";

        // a regra do maior para menor xs - maior 12 opcupa tela toda
        if(cols[0]) classes += ` col-xs-${cols[0]}` 
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`
        return classes
    }

    render () {
        // se cols não for enviado - o 12 será automatico
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}