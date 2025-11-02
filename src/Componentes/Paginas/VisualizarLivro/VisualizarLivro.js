import { Link, useParams } from 'react-router-dom';
import './VisualizarLivro.css'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const VisualizarLivro = () => {

    const { id } = useParams()
    const [livro, setLivro] = useState({})

    useEffect(() => {
        const getLivro = async () => {
            const url = `http://localhost:3000/buscar_livro/${id}`

            try {
                const resp = await fetch(url)
                const data = await resp.json()
                setLivro(data)
            } catch (erro) {
                console.error("Erro ao buscar livros", erro)
            }
        }
        getLivro()
    }, [id])


    return (
        <>
            <br></br>
            <h1>{livro.nome}</h1>
            <div className='div-dados-livro'>
                <img
                    src={livro.link_capa}
                    alt="Capa do livro"
                    className='capa-livro'
                >
                </img>
                <div className='item-do-grid'>
                    <h4>Nome</h4>
                    <p>{livro.nome}</p>
                </div>
                <div className='item-do-grid'>
                    <h4>Autor</h4>
                    <p>{livro.autor}</p>
                </div>
                <div className='item-do-grid'>
                    <h4>Ano de publicação</h4>
                    <p>{livro.ano}</p>
                </div>
                <div className='item-do-grid'>
                    <h4>Editora</h4>
                    <p>{livro.editora}</p>
                </div>

            </div>
            <Link to={'/lista_livros'}><Button>Retornar à lista</Button></Link>

        </>
    )
}

export default VisualizarLivro;