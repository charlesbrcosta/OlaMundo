import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Menu }  from './components/Menu';

import styles from './App.module.css'

export function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

