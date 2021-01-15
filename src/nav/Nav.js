import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Navigation",
            subtitle: "Main menu",
            show: "hide"
        }
    }
    ShowMenu = () => {
        this.setState({show:"show"});
    }
    render() {
     let nav = this.props.nav;
        return (
           <nav>
               <button className="btn btn-success" type="button" onClick={this.ShowMenu}>Show menu</button>
               <h1>{this.state.title}</h1>
               <p>{this.state.show}</p>
               <ul>
                    {Object.keys(nav).map(elem =>{
                        return <li key={elem}><a href="{nav[elem]}">{elem}</a></li>
                    })}
               </ul>
           </nav>
        );
    }
}

export default Nav;