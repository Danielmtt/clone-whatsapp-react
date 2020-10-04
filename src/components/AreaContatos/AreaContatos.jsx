import React, { Component } from 'react';

import Cabecalho from "./Cabecalho";
import Pesquisa from "./Pesquisa";
import Contatos from "./Contatos";
import './style.css'

class AreaContatos extends Component {
    constructor(props){
        super(props);

        this.state = {
            listaContato: this.props.friends
        };
    }


    selecionaContato(contato){
        this.props.selecionaContato(contato);
    }

    pesquisaContato(nome){
        let novoEstado = {};

        if (nome != "") {
            novoEstado = {
                listaContato: this.props.friends.filter(item => {
                    let count = 0;
                    for(let c of nome){
                         if (item.name[count] != c)
                            return false
                         count++
                    }
                    return true;
                })
            } 
            
        } else {
            novoEstado = {
                listaContato: this.props.friends
            }
        }

        this.setState(novoEstado)
        
    }
    
    render() { 
        return ( 
            <>
            <div className="areacontatos_container">
                <Cabecalho url={"data:image/png;base64,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"}/>
                <Pesquisa pesquisaContato={this.pesquisaContato.bind(this)} />
                <Contatos selecionaContato={this.selecionaContato.bind(this)} friends={this.state.listaContato}/>
            </div>
            </>
        );
    }
}
 
export default AreaContatos;