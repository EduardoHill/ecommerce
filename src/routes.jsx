import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/App/Home/page'
import { Contact } from './Pages/App/contact/page'
import { Details } from './Pages/App/Details/page'
import { About } from './Pages/App/About/page'
import { Collections } from './Pages/App/Collections/page'
import { Men } from './Pages/App/Men/page'
import { Women } from './Pages/App/Women/page'
import { UserPage } from './Pages/user/page'
import { Compras } from './Pages/user/UserCompras/page'
import { Enderecos } from './Pages/user/UserEndereço/page'
import { Central } from './Pages/user/UserCentral/page'
import { Pedidos } from './Pages/user/UserPedidos/page'

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
    path: '/details',
    element: <Details />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/men',
    element: <Men />,
  },
  {
    path: '/women',
    element: <Women />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/user/compras',
    element: <Compras />,
  },
  {
    path: '/user/enderecos',
    element: <Enderecos />,
  },
  {
    path: '/user/central',
    element: <Central />,
  },
  {
    path: '/user/pedidos',
    element: <Pedidos />,
  },
])
