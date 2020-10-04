import React, { Component } from 'react';

import Cabecalho from './Cabecalho';
import Mensagens from './Mensagens';
import EnviarMensagens from './EnviarMensagem'
import './style.css'

class AreaMensagens extends Component{

    novaMensagem(mensagem, data){
        this.props.novaMensagem(mensagem, data)
        let objDiv = document.querySelector(".mensagens_container");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() { 
        if(this.props.friendSelected != null){
            return ( 
                <>
                    <div className="areamensagens_container">
                        <Cabecalho contato={this.props.friendSelected}/>
                        <Mensagens mensagens={this.props.friendSelected.mensagens}/>
                        <EnviarMensagens novaMensagem={this.novaMensagem.bind(this)}/>
                    </div>
                </>
            );
            
        }

        return(
            <div className="nenhumContatoSelecionado">
                <div></div>
            </div>
        )
        
    }
}
 
export default AreaMensagens;