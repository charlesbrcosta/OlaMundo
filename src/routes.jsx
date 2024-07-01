import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Menu }  from '@components/Menu';
import { Footer } from '@components/Footer';
import { DefaultPage } from '@components/DefaultPage';

export function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

