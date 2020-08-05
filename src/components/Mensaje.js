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
        e.preventDefault();
        //this.calcularFormulaGeneral(8,-2,-3);
        console.log(e);
        //https://wa.me/526471164048?text=Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20del%20curso
        direccion = 'https://wa.me/52'+this.state.telefono+'?text='+this.state.texto;    //=Texto';
        document.location.href = direccion;
        //console.log(direccion);
        //this.calcularFormulaGeneral(this.state.a, this.state.b, this.state.c);
        
        //console.log(this.state.datos.a);
        //alert('Valor de a: ' + this.state.datos.a);
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
                <div class="container h-100">
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