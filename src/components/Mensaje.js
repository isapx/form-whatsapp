import React, { Component } from 'react';

class Mensaje extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telefono:'',
            texto:''
        };
    }

    manejarSubmit = e => {
        var direccion;
        var telefono
        e.preventDefault();
       
        //https://wa.me/526471164048?text=Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20del%20curso
        telefono = this.state.telefono.replace(/ /g, "");
        console.log(telefono);
        direccion = 'https://wa.me/52'+telefono+'?text='+this.state.texto;    //=Texto';
        console.log(direccion);
        //document.location.href = direccion;
        
    } 

    manejarCambios = e => {
        this.setState({
            
                ...this.state, //copio el state
                [e.target.name] : e.target.value
            
        })
    }

    render() {
        return(
            <form 
                onSubmit={this.manejarSubmit}  
            >
                <div className="container h-100">
                <div className="form-group">                    
                    <label>Celular:</label>
                    <input 
                        type="text" 
                        className="form-control"                         
                        name="telefono"
                        onChange={this.manejarCambios} 
                        value={this.state.telefono} />                                     
                    <label>Texto a Enviar</label>
                    <textarea 
                        type="text" 
                        className="form-control"                          
                        name="texto" 
                        rows="6"
                        onChange={this.manejarCambios}
                        value={this.state.texto} >
                    </textarea>
                    
                </div>
    
                <input type="submit" className="py-3 mt-2 btn btn-success" value="Enviar"/>
                </div>

            </form>
        )
    }
}

export default Mensaje;