import './index.css'
import { TwitterPost } from './components/TwitterPost/TwitterPost.jsx'
import { TwitterCard } from './components/TwitterCard//TwitterCard.jsx'

function App() {
    return (
        <main className='App'>
            <div className='App-main'>
                <TwitterPost
                    nombreUsuario={'Elon Musk'}
                    usuario={'ElonMusk'}
                    time={'25'}
                />
                <TwitterPost
                    className="prueba"
                    nombreUsuario={'Elon Musk'}
                    usuario={'ElonMusk'}
                    time={'25'}
                />
                <TwitterPost
                    nombreUsuario={'Elon Musk'}
                    usuario={'ElonMusk'}
                    time={'25'}
                />
            </div>
            <div className='App-secund'>
                {/* <div className='seccion'>
                    <h1>Seccion 1</h1>
                </div> */}
                <div className='App-SecundUserSug seccion' >
                    <h1>Seccion 2</h1>
                    <TwitterCard
                    nombreUsuario='Elon Musk'
                    usuario='ElonMusk'
                    />

                    <TwitterCard/>
                    <TwitterCard/>
                    <TwitterCard/>
                </div>
                
            </div>
            
            
        </main>
    )
}


export default App