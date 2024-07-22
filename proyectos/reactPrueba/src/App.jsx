import { TwitterCard } from "./TwitterCard/TwitterCard";
import "./App.css"

function App () {
    return (
        <section className="App">
            <TwitterCard 
            siguiendo={false} 
            nombreUsuario='Elon Musk' 
            usuario='ElonMusk' /> 

            <TwitterCard 
            siguiendo 
            nombreUsuario='Gacha Memes' 
            usuario='GenshinImpactOC' /> 

            <TwitterCard 
            siguiendo={false} 
            nombreUsuario='Keitaro' 
            
            usuario='DqKeita' /> 

            <TwitterCard 
            siguiendo nombreUsuario='Miguel Ángel Durán' 
            usuario='midudev' /> 

            <TwitterCard 
            siguiendo 
            nombreUsuario='Cosmic Red (dark mode)' 
            usuario='carmenansio' /> 

            <TwitterCard 
            siguiendo 
            nombreUsuario='Putupau' 
            usuario='PutuPauu' /> 
            
            <TwitterCard 
            siguiendo 
            nombreUsuario='⚡SkyZero⚡' 
            usuario='XSkyZeroX' /> 
        </section>
    )
}

export {App};