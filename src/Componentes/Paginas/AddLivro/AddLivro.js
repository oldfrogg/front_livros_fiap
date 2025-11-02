import { Button, Form } from 'react-bootstrap';
import './AddLivro.css'
import { useState } from "react";
import { Link } from 'react-router-dom';



function AddLivro() {

    // Salvar os dados do formulário
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [ano, setAno] = useState("");
    const [editora, setEditora] = useState("");
    const [linkCapa, setLinkCapa] = useState("")

    function criarLivro(e) {

        e.preventDefault()

        const url = "http://localhost:3000/criar_livro/"

        const data = {
            nome: nome,
            autor: autor,
            ano: ano,
            editora: editora,
            link_capa: linkCapa
        }

        if (!nome || !autor || !ano || isNaN(ano) || !editora) {
            alert("Por favor, preencha os campos com um formato válido.");
            return;
        }

        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", // informo que estou enviando JSON
                },
                body: JSON.stringify(data)
            })
                .then(resp => {
                    if (resp.status === 201) {
                        return resp.json()
                    }
                    else {
                        alert(`Erro! O servidor retornou ${resp.json}`)
                        throw new Error("O servidor encontrou problemas para adicionar o livro.")
                    }
                })
                .then(data => {
                    console.log("Livro criado:", data);
                    alert("Livro adicionado com sucesso!");
                    console.log(data)
                })
        } catch (erro) {
            console.error("Erro ao adicionar livro", erro)
        }
    }

    return (
        <>
            <p className='fs-2 p-add-livros'>Adicione um Livro</p>
            <Form className='form-add-livros'>
                <Form.Group className='form-group'>
                    <Form.Label> Nome do livro:</Form.Label>
                    <Form.Control
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label> Autor:</Form.Label>
                    <Form.Control
                        type='text'
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label> Ano de publicação:</Form.Label>
                    <Form.Control
                        type='number'
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label> Editora:</Form.Label>
                    <Form.Control
                        type='text'
                        value={editora}
                        onChange={(e) => setEditora(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label> Link da Capa:</Form.Label>
                    <Form.Control
                        type='text'
                        value={linkCapa}
                        onChange={(e) => setLinkCapa(e.target.value)}
                    />
                </Form.Group>
            </Form >
            <Button
                className='d-block mx-auto btn-adicionar'
                variant="secondary"
                type='submit'
                style={{ width: 'auto' }}
                onClick={criarLivro}>Adicionar!
            </Button>

            <Link to={'/lista_livros'}><Button>Retornar à lista</Button></Link>
        </>
    )
}

export default AddLivro;