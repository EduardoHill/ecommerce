import { ShoppingCart } from 'lucide-react'

export function NavBar() {
  return (
    <nav className=' w-7xl flex border-b  border-b-zinc-500 items-center justify-between p-8 gap-5'>
      <div className='flex gap-8'>
        <h1 className=' text-4xl'>sneakers</h1>
        <div className=' flex items-center justify-center gap-5'>
          <button className='cursor-pointer text-zinc-500 hover:border-b hover:text-black border-b-amber-500'>
            <span>Collections</span>
          </button>
          <button className='cursor-pointer text-zinc-500 hover:border-b hover:text-black border-b-amber-500'>
            <span>Men</span>
          </button>
          <button className='cursor-pointer text-zinc-500 hover:border-b hover:text-black border-b-amber-500'>
            <span>Women</span>
          </button>
          <button className='cursor-pointer text-zinc-500 hover:border-b hover:text-black border-b-amber-500'>
            <span>About</span>
          </button>
          <button className='cursor-pointer text-zinc-500 hover:border-b hover:text-black border-b-amber-500'>
            <span>Contact</span>
          </button>
        </div>
      </div>
      <div className='flex gap-8 ml-5 items-center'>
        <div>
          <ShoppingCart className='cursor-pointer' />
        </div>
        <button>
          <img
            src='#'
            alt='Imagem de usuario'
            className='border rounded-[50%] h-10 w-10 cursor-pointer hover:border-amber-500'
          />
        </button>
      </div>
    </nav>
  )
}
