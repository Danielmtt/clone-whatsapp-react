import React, { Component } from 'react';

import './style.css'

class Mensagens extends Component {
    formatahora(data){
        data = data.split(" ");
        let hora = data[1];
        hora = hora.split(":");
        
        return hora[0] + ":" + hora[1]
    }
    
    render() { 
        return (  
            <div className="mensagens_container">
                <ul className="lista_mensagens">

                {this.props.mensagens.map((mensagem, index) => {
                    if (mensagem.author == "friend") {
                        return (
                            <li className="recebida" key={index}>
                                <div className="balaorecebida">
                                    <p>{mensagem.message}</p>
                                    <p className="horamensagem">{this.formatahora(mensagem.time)}</p>
                                </div>
                            </li>
                        );    
                    } 
   
                    return (
                        <li className="enviada" key={index}>
                            <div className="balaoenviada">
                                <p>{mensagem.message}</p>
                                <p className="horamensagem">{this.formatahora(mensagem.time)}</p>
                            </div>
                        </li>
                    )
                    
                })}       
                </ul>
            </div>
        );
    }
}
 
export default Mensagens;