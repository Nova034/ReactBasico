import './ButtonLike.css'; 
import PropTypes from 'prop-types';
import { useState } from 'react';

const ButtonLike = ( {estadoInicial = false, fnCambiarEstadoInicial} ) => {

    // Estado Inicial del boton. 
    const [estado, setEstado] = useState(estadoInicial);

    // Mensaje del boton condicionado al valor del estado del boton. 
    let mensajeBoton = estado ? 'No megusta' :'Me gusta';

    // funcion invocado cuando se haga click al boton. 
    function handleClick() {

        const nuevoEstado = !estado;

        // Esta funcion cambia el estado del boton.
        setEstado(nuevoEstado); 

        console.log('Estado interno del boton cambiado', nuevoEstado); 

        if (fnCambiarEstadoInicial) {
            fnCambiarEstadoInicial(nuevoEstado)
        }
    }

    return (
        <button onClick={handleClick}>{mensajeBoton}</button>
    )
}

ButtonLike.propTypes = {
    estadoInicial: PropTypes.bool.isRequired,
    fnCambiarEstadoInicial: PropTypes.func.isRequired,
}

export {ButtonLike};