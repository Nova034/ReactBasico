import './Avatar.css'
export function Avatar({src, alt, title='Avatar del Usuario'}) {
    return (
    <span className='Avatar'>
        <img src={src} alt={alt} title={title} />
    </span>
    )
}