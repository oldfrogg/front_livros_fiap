import { Button, Container } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <>
            <Container>
                <div className='text-center'>
                    <p className="fs-1 saudacao">Bem-vindo à Biblioteca!</p>
                    <p className='fs-3 texto-home'>Aqui você pode gerenciar o cadastro de uma biblioteca, incluindo, editando e removendo-os do cadastro, além de poder pesquisá-los.</p>
                    <p className='fs-3'>Comece a explorar agora!</p>
                    <Link to='/lista_livros'><Button size='lg'>Explorar!</Button></Link>
                </div>
            </Container>
        </>
    )
}

export default Home;