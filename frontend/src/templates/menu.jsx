import React from 'react' 

export default props => (
    <nav className="navibar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navibar-brand" href="#">
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/todos">Tarefas</a>
                        <a href="#/about">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)