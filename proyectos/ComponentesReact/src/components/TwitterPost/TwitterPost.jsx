import './TwitterPost.css'
import { Avatar } from '../Avatar/Avatar'
import { ButtonLike } from '../ButtonLike/ButtonLike'
const TwitterPost = ( {usuario, nombreUsuario, time}) => {
    return (
        <main className='Post'>
            <Avatar
                src={`https://unavatar.io/x/${usuario}`}
                alt={`Imagen de perfil de ${usuario}`}
                title={usuario}
            />
            <section className='TwitterPostMain'>
                <header className='cuerpoUsuario'>
                    <strong className='nombreUsuario'>
                            {nombreUsuario}
                    </strong>
                    <span className='usuario'>
                            @{usuario}
                    </span>
                    <span>
                    ·
                    </span>
                    <time className='tiempoPost'>
                            {time} min
                    </time>
                </header>
                <article className='cuerpoPost'>
                    <section className='cuerpoInfo'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem, nemo minus quia dolore tenetur delectus, consequatur cupiditate quisquam esse minima, facere ipsa voluptates asperiores enim obcaecati debitis deleniti nihil?
                        </p>
                    </section>
                    <figure>
                        <img src="https://via.placeholder.com/500x300/FF5733/FFFFFF?text=Imagen+1" />
                    </figure>
                    
                </article>
                <footer className='cuerpoBoton'>
                    <ButtonLike></ButtonLike>
                    <ButtonLike></ButtonLike>
                    <ButtonLike></ButtonLike>
                    <ButtonLike></ButtonLike>
                </footer>
            </section>
        </main>
    )
}

export { TwitterPost }