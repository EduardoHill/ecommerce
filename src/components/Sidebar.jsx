import { Link, useLocation } from 'react-router-dom'

export function Sidebar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className='flex pt-9  h-screen w-[300px] bg-zinc-200 '>
      <div className='h-full w-full '>
        <Link to={'/'} className='text-2xl font-bold'>
          SH
        </Link>
        <ul className=' w-full flex flex-col gap-6 mt-9 '>
          <li>
            <Link
              to={'/user'}
              className={`w-full h-10 flex items-center cursor-pointer ${
                isActive('/user') ? 'bg-zinc-300' : 'hover:bg-zinc-300'
              }`}
            >
              Dados
            </Link>
          </li>
          <li>
            <Link
              to={'/user/compras'}
              className={`w-full h-10 flex items-center cursor-pointer ${
                isActive('/user/compras') ? 'bg-zinc-300' : 'hover:bg-zinc-300'
              }`}
            >
              Compras em andamento
            </Link>
          </li>
          <li>
            <Link
              to={'/user/enderecos'}
              className={`w-full h-10 flex items-center cursor-pointer ${
                isActive('/user/enderecos')
                  ? 'bg-zinc-300'
                  : 'hover:bg-zinc-300'
              }`}
            >
              Endereços
            </Link>
          </li>
          <li>
            <Link
              to={'/user/central'}
              className={`w-full h-10 flex items-center cursor-pointer ${
                isActive('/user/central') ? 'bg-zinc-300' : 'hover:bg-zinc-300'
              }`}
            >
              Central de ajuda
            </Link>
          </li>
          <li>
            <Link
              to={'/user/pedidos'}
              className={`w-full h-10 flex items-center cursor-pointer ${
                isActive('/user/pedidos') ? 'bg-zinc-300' : 'hover:bg-zinc-300'
              }`}
            >
              Pedidos antigos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
