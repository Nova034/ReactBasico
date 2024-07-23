import { useState } from "react";
import './TresEnRaya.css';

const TresEnRaya = () => {

    const [bloques, setBloques] = useState((Array(9).fill('-')));
    const [esX, setEsX] = useState(true);

    function handelClick(inx){
        if (bloques[inx] === '-')
        {
            const siguentesBloques = bloques.slice();
            if (esX) {
                siguentesBloques[inx] = 'X';
            }
            else {
                siguentesBloques[inx] = 'O';
            }
            setBloques(siguentesBloques);
            setEsX(!esX)
        }
    }

    return (
        <main className="TER-MainContent">
            <h1>Hola Mundo</h1>
            <div>
                <Bloque value={bloques[0]} bloqueClick={() => {handelClick(0)}}></Bloque>
                <Bloque value={bloques[1]} bloqueClick={() => {handelClick(1)}}></Bloque>
                <Bloque value={bloques[2]} bloqueClick={() => {handelClick(2)}}></Bloque>
            </div>
            <div>
                <Bloque value={bloques[3]} bloqueClick={() => {handelClick(3)}}></Bloque>
                <Bloque value={bloques[4]} bloqueClick={() => {handelClick(4)}}></Bloque>
                <Bloque value={bloques[5]} bloqueClick={() => {handelClick(5)}}></Bloque>
            </div>
            <div>
                <Bloque value={bloques[6]} bloqueClick={() => {handelClick(6)}}></Bloque>
                <Bloque value={bloques[7]} bloqueClick={() => {handelClick(7)}}></Bloque>
                <Bloque value={bloques[8]} bloqueClick={() => {handelClick(8)}}></Bloque>
            </div>
            
        </main>
    )
}

const Bloque = ({value, bloqueClick}) => {

    return (
        <>
            <button 
            className="bloquePrin"
            onClick={bloqueClick}
            >
                {value}
            </button>
        </>
    )

}


export {TresEnRaya};