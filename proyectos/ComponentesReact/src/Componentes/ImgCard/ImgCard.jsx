import './ImgCard.css'
import { TwitterCard } from "../TwitterCard/TwitterCard"


const ImgCard = () => {

    const ImgPortada = `https://via.placeholder.com/400x250/BB5733/FFFFFF`;

    const AvatarImg = `https://unavatar.io/x/ElonMusk`;

    return (
        <main className='card-MainConten'>

            <figure className='card-ImgConten'>
                <img className='Img' src={ImgPortada} alt="" />
            </figure>

            <section className='card-SecudConten'>
                <section className='card-UserConten'>
                    <img className='UserAvatar' src={AvatarImg} alt="" />
                    <div className='UserConten'>
                        <strong className='UserName' >
                                Nombre de Usuario
                        </strong>
                        <span className='UserSeccion'>
                                @Usuario
                        </span>
                    </div>
                    
                </section>
                <aside className='card-InfoConten'>
                    <h4 className='card-TituloConten'>Titulo de la Card</h4>
                    <p className='InfoCard'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos enim voluptatibus incidunt, aut ducimus numquam et reprehenderit tenetur rem nostrum consequatur, quae sunt maiores ipsam ad dolores? Mollitia, labore.
                    </p>
                </aside>
            </section>
        </main>
    )
}

export {ImgCard};

