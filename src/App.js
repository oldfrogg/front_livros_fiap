import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from './Componentes/Paginas/Home/Home.js';
import ListaLivros from './Componentes/Paginas/ListaLivros/ListaLivros.js';
import AddLivro from './Componentes/Paginas/AddLivro/AddLivro.js';
import EditarLivro from './Componentes/Paginas/EditarLivro/EditarLivro.js';
import Banner from './Componentes/Banner/Banner.js';
import MenuNav from './Componentes/Paginas/MenuNav/MenuNav.js';
import VisualizarLivro from './Componentes/Paginas/VisualizarLivro/VisualizarLivro.js';




function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNav />
        <Banner />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/lista_livros/' element={<ListaLivros />} />
          <Route exact path='/add_livro/' element={<AddLivro />} />
          <Route exact path='/editar_livro/:id' element={<EditarLivro />} />
          <Route exact path='/visualizar_livro/:id' element={<VisualizarLivro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
