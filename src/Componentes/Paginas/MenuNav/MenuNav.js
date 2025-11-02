import { Container, Nav, Navbar } from "react-bootstrap"

const MenuNav = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand>Biblioteca</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/lista_livros">Lista de Livros</Nav.Link>
                        <Nav.Link href="/add_livro">Adicionar Livro</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNav