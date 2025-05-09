import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/App/Home/page'
import { Contact } from './Pages/App/contact/page'
import { Details } from './Pages/App/Details/page'
import { About } from './Pages/App/About/page'
import { Collections } from './Pages/App/Collections/page'
import { Men } from './Pages/App/Men/page'
import { Women } from './Pages/App/Women/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/colletions',
    element: <Collections />,
  },
  {
    path: '/men',
    element: <Men />,
  },
  {
    path: '/women',
    element: <Women />,
  },
])
