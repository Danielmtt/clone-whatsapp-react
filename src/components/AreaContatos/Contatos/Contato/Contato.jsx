import React, { Component } from 'react';

import './style.css';

class Contato extends Component {
    
    ultimaMensagem(){
        let mensagem = this.props.friend.mensagens[this.props.friend.mensagens.length - 1]
        let mensagemFormat = mensagem.message;

        if (mensagem.message.length > 40) {
            mensagemFormat = mensagem.message.substring(0, 40) + '...'
        }
 
        if (mensagem.author == 'sending') {
            mensagemFormat = "you: " + mensagemFormat;
        }

        return mensagemFormat;
    }


    formatahora(data){
        data = data.split(" ");
        
        let hora = data[1];
        hora = hora.split(":");

        return hora[0] + ":" + hora[1]
    }

    render() { 
        
        return (  
            <div className="contato_container">
                <img src={this.props.friend.picture}/>

                <div>
                    <div className="stats">
                        <p className="nome_contato">{this.props.friend.name}</p> 
                        <span className="hora">{this.formatahora(this.props.friend.mensagens[this.props.friend.mensagens.length - 1].time.toString())}</span>
                    </div>
                    
                    <p className="ultima_mensagem">{this.ultimaMensagem()}</p>
                </div>
                
            </div>
        );
    }
}
 
export default Contato;