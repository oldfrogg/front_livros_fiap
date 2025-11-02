import './ListaLivros.css'
import Tabela from "../../Tabela/Tabela"


function ListaLivros() {
    return (
        <>
        <p className="fs-2 p-livros">Livros Cadastrados</p>
            <Tabela />
        </>
    )
}

export default ListaLivros