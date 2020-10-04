import React, { Component } from 'react';

import Contato from './Contato/Contato';
import './style.css';


class Contatos extends Component {

    constructor(props){
        super(props);
        this.contatoId = -1;
    }


    getContatoSelected(id){
        return this.contatoId == id ? "selected" : "";
    }
    
    selecionaContato(contato){
        this.props.selecionaContato(contato);
        this.contatoId = contato.id;
    }

    render() { 
        return (  
            <>
            <div className="contatos_container">
                <ul>
                {this.props.friends.map((contato, index) => {
                    return (
                        <li onClick={() => this.selecionaContato(contato)} className={"lista-notas_item " + this.getContatoSelected(contato.id)}  key={index}>
                            <Contato friend={contato}/>
                        </li>
                    );
                })}
                </ul>
            </div>

            </>
        );
    }
}
 
export default Contatos;