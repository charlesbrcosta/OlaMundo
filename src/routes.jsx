import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Menu }  from '@components/Menu';
import { Footer } from '@components/Footer';
import { DefaultPage } from '@components/DefaultPage';
import { Post } from '../src/Pages/Post'
import { NotFound } from './Pages/NotFound';
import ScrollToTop from '@components/ScrollToTop';

export function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='posts/:id/*' element={<Post />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

