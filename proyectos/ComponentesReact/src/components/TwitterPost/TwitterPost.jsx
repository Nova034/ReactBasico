import './TwitterPost.css'

const TwitterPost = ( {usuario, nombreUsuario}) => {
    return (
        <main>
            <span className='Avatar'>
                <img src={`https://unavatar.io/x/${usuario}`} />
            </span>
            <article className='cuerpoPost'>
                <header className='cuerpoUsuario'>
                    <strong className='nombreUsuario'>
                        {nombreUsuario}
                    </strong>
                    <span className='usuario'>
                        @{usuario}
                    </span>
                    <time className='tiempoPost'>
                        36 min
                    </time>
                </header>
                <section className='cuerpoInfo'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem, nemo minus quia dolore tenetur delectus, consequatur cupiditate quisquam esse minima, facere ipsa voluptates asperiores enim obcaecati debitis deleniti nihil?
                    </p>
                    <figure>
                        <img src="https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Imagen+1" />
                    </figure>
                </section>
            </article>
        </main>
    )
}

export { TwitterPost }