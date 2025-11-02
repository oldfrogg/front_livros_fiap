import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import './tabela.css'
import { Link } from "react-router-dom";

function Tabela() {


    const [livros, setLivros] = useState([])

    async function getLivros() {
        const url = "http://localhost:3000/listar_livros/"

        try {
            fetch(url, { method: 'GET' })
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    console.log(data)
                    setLivros(data)
                })
        } catch (erro) {
            console.error("Erro ao buscar livros", erro)
        }
    }

    useEffect(() => {
        getLivros()
    }, []) // O segundo argumento evita requisições infinitas, ao acontecer o setLivros


    async function removerLivro(id) {
        console.log("função removerLivro")
        const url = `http://localhost:3000/deletar_livro/${id}`

        try {
            fetch(url, { method: 'DELETE' })
                .then(resp => {
                    if (resp.ok) {
                        alert("Livro removido com sucesso!")
                        return getLivros();
                    }
                }
                )
        } catch (erro) {
            alert("Erro ao excluir livro!")
            console.error("Erro ao deletar", erro)
        }
    }

    return (
        <>
            <table className="table w-75 mx-auto">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Livro</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Pesquisar</th>
                        <th scope="col">Visualizar</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <tr key={index}>
                            <td>{livro.id}</td>
                            <td>{livro.nome}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.ano}</td>
                            <td>{livro.editora}</td>
                            <td>
                                <Button
                                    variant="secondary"
                                    onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(livro.nome)}+livro`, '_blank')}
                                >
                                    Pesquisar
                                </Button>
                            </td>
                            <td><Link to={`/visualizar_livro/${livro.id}`}><Button variant="secondary">Visualizar</Button></Link></td>
                            <td><Link to={`/editar_livro/${livro.id}`}><Button variant="secondary">Editar</Button></Link></td>
                            <td><Button variant="secondary" onClick={() => removerLivro(livro.id)}>Remover</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={'/add_livro'}><Button>Adicionar Livro</Button></Link>
        </>
    )
};



export default Tabela;