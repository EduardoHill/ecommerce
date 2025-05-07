import { ShoppingCart } from 'lucide-react'

export function NavBar() {
  return (
    <nav className=' w-[1200px] flex bg-amber-500 border-b border-b-zinc-500 items-center justify-center '>
      <h1 className='text-bold'>sneakers</h1>
      <div>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div>
        <ShoppingCart />
        <img src='#' alt='Imagem de usuario' />
      </div>
    </nav>
  )
}
