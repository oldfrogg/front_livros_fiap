import { Image } from 'react-bootstrap';
import './Banner.css'


function Banner() {
    return (
        <>
                <Image
                    src='./imagens/biblioteca.png'
                    alt='Banner da página. Uma imagem de uma parte de uma estante antiga de madeira com vários livros antigos posicionados verticalmente, junto à uma vela antiga, relógios análogicos e uma engrenagem. Uma imagem que remete ao estilo Steampunk.'
                    fluid
                    className='d-block mx-auto'
                    id="img-banner" />
        </>
    )
};

export default Banner;