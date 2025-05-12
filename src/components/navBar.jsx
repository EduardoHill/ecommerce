import { ShoppingCart } from 'lucide-react'

import avatar from '../images/avatar.png'
import { Link, useLocation } from 'react-router-dom'

export function NavBar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  return (
    <nav className=' max-w-7xl mx-auto w-full flex border-b  border-b-zinc-500 items-center justify-between pt-8 pb-8 gap-5'>
      <div className='flex gap-8'>
        <Link to={'/'} className=' text-4xl'>
          SneakersHub
        </Link>
        <div className=' flex items-center justify-center gap-5'>
          <Link
            to={'/'}
            className={`cursor-pointer   ${
              isActive('/')
                ? 'border-b text-black border-b-amber-500'
                : 'text-zinc-500 hover:border-b hover:text-black border-b-amber-500'
            }`}
          >
            <span>All</span>
          </Link>
          <Link
            to={'/men'}
            className={`cursor-pointer   ${
              isActive('/men')
                ? 'border-b text-black border-b-amber-500'
                : 'text-zinc-500 hover:border-b hover:text-black border-b-amber-500'
            }`}
          >
            <span>Men</span>
          </Link>
          <Link
            to={'/women'}
            className={`cursor-pointer   ${
              isActive('/women')
                ? 'border-b text-black border-b-amber-500'
                : 'text-zinc-500 hover:border-b hover:text-black border-b-amber-500'
            }`}
          >
            <span>Women</span>
          </Link>
          <Link
            to={'/about'}
            className={`cursor-pointer   ${
              isActive('/about')
                ? 'border-b text-black border-b-amber-500'
                : 'text-zinc-500 hover:border-b hover:text-black border-b-amber-500'
            }`}
          >
            <span>About</span>
          </Link>
          <Link
            to={'/contact'}
            className={`cursor-pointer   ${
              isActive('/contact')
                ? 'border-b text-black border-b-amber-500'
                : 'text-zinc-500 hover:border-b hover:text-black border-b-amber-500'
            }`}
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className='flex gap-8 ml-5 items-center'>
        <div className='flex'>
          <ShoppingCart className='cursor-pointer relative' />
          <span className='flex items-center justify-center text-[10px] bg-red-500 border-red-500 rounded-[50%] h-[20px] w-[20px] absolute mt-[-10px] ml-[15px] '>
            +3
          </span>
        </div>
        <Link to={'/user'}>
          <img
            src={avatar}
            alt='Imagem de usuario'
            className='border rounded-[50%] h-10 w-10 cursor-pointer hover:border-amber-500'
          />
        </Link>
      </div>
    </nav>
  )
}
