import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditarLivro() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [livros, setLivros] = useState({})
    const [nome, setNome] = useState("Teste")
    const [autor, setAutor] = useState("")
    const [ano, setAno] = useState("")
    const [editora, setEditora] = useState("")
    const [linkCapa, setLinkCapa] = useState("")


    useEffect(() => {
        const getLivro = async () => {
            const url = `http://localhost:3000/buscar_livro/${id}`

            try {
                const resp = await fetch(url)
                const data = await resp.json()
                setLivros(data)
            } catch (erro) {
                console.error("Erro ao buscar livros", erro)
            }
        }
        getLivro()
    }, [id])

    useEffect(() => {
        if (livros) { // só quero acessar livros.nome, etc, quando o estado existir
            setNome(livros.nome || ""); // daqui pra baixo atualiza os estados individuais do form
            // e se o valor for indefinido, utilizo uma string vazia.
            setAutor(livros.autor || "");
            setAno(livros.ano || "");
            setEditora(livros.editora || "");
            setLinkCapa(livros.link_capa || "");
        }
    }, [livros]); // a função executará no início e quando a dependência "livros" tiver alteração

    const dadosLivro = {
        nome: nome,
        autor: autor,
        ano: ano,
        editora: editora,
        link_capa: linkCapa
    }

    const valorDigitado = (e) => {
        const { name, value } = e.target
        if (name === "nome") setNome(value)
        if (name === "autor") setAutor(value)
        if (name === "ano") setAno(value)
        if (name === "editora") setEditora(value)
        if (name === "link-capa") setLinkCapa(value)
        console.log(e.target.value)
    }

    const submitEdit = async (e) => {
        e.preventDefault()

        const url = `http://localhost:3000/editar_livro/${id}`

console.log(livros)

        if (!nome || !autor || !ano || isNaN(ano) || !editora) {
            alert("Por favor, preencha os campos com um formato válido.");
            return
        }

        if (livros.nome === nome && livros.autor === autor && livros.ano === ano && livros.editora === editora && livros.link_capa === linkCapa) {
            alert("Necessário alterar algum dado para submeter a alteração.")
            return
        }

        try {
            const resp = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json", // informo que estou enviando JSON
                },
                body: JSON.stringify(dadosLivro)
            })
            if (resp.status === 200) { // se o back devolver que o livro foi editado
                console.log("Livro criado:", dadosLivro);
                alert("Livro editado com sucesso!");
                console.log(dadosLivro)
                navigate("/lista_livros"); // redireciona, por exemplo, para a página inicial
            }
            else {
                alert(`Erro! O servidor retornou ${resp.json}`)
                throw new Error("O servidor encontrou problemas para adicionar o livro.")
            }
        } catch (erro) {
            console.error("Erro ao adicionar livro", erro)
        }
    }

    return (
        <>
            <br></br>
            <p className="fs-2">Editar Livro</p>
            <table className="table w-50 mx-auto">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Livro</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Link da Capa</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{livros.id}</td>
                            <td>{livros.nome}</td>
                            <td>{livros.autor}</td>
                            <td>{livros.ano}</td>
                            <td>{livros.editora}</td>
                            <td>{livros.link_capa}</td>
                        </tr>
                    }
                </tbody>
            </table>
            <Form>
                <Form.Group>
                    <Form.Label> Nome do livro
                        <Form.Control
                            name='nome'
                            type='text'
                            value={nome}
                            onChange={valorDigitado}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Autor
                        <Form.Control
                            name='autor'
                            type='text'
                            value={autor}
                            onChange={valorDigitado}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Ano de publicação
                        <Form.Control
                            name='ano'
                            type='number'
                            value={ano}
                            onChange={valorDigitado}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Editora
                        <Form.Control
                            name='editora'
                            type='text'
                            value={editora}
                            onChange={valorDigitado}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Link da Capa
                        <Form.Control
                            name='link-capa'
                            type='text'
                            value={linkCapa}
                            onChange={valorDigitado}
                        />
                    </Form.Label>
                </Form.Group>
            </Form>
            <br></br>
            <Button
                className='d-block mx-auto btn-adicionar'
                variant="secondary"
                type='submit'
                style={{ width: 'auto' }}
                onClick={submitEdit}
            >
                Editar!
            </Button>
            <Link to={'/lista_livros'}><Button>Retornar à lista</Button></Link>
        </>
    )
}

export default EditarLivro