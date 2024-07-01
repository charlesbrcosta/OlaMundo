import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Menu }  from '@components/Menu';
import { Footer } from '@components/Footer';
import { DefaultPage } from '@components/DefaultPage';
import { Post } from '../src/Pages/Post'
import { NotFound } from './Pages/NotFound';

export function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='posts/:id' element={<Post />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

