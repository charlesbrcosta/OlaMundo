import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';

import styles from './App.module.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
