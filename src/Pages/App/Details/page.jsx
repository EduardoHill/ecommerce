import { ShoppingCart } from 'lucide-react'
import { NavBar } from '../../../components/navBar'
import produto from '../../../images/produto.jpg'
import { useState } from 'react'
export function Details() {
  const [quantidade, setQuantidade] = useState(0)

  const incrementar = () => setQuantidade((q) => q + 1)
  const decrementar = () => setQuantidade((q) => (q > 0 ? q - 1 : 0))

  return (
    <div className='  font-KumbhSans'>
      <div>
        <NavBar />
      </div>
      <div className='flex  max-w-7xl mx-auto w-full p-16 justify-between '>
        <div>
          <img
            src={produto}
            alt=''
            className='w-[400px] h-[500px] rounded-2xl'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-7 w-[600px]'>
            <span className=' text-[12px] text-zinc-500 s'>
              SNEAKER COMPANY
            </span>
            <h1 className='flex text-6xl font-bold'>
              Fall Limited Edition Sneakers
            </h1>
            <p className=' text-zinc-500'>
              These low-profile Sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'ill withstand
              everything the weather can offer
            </p>
            <strong className='text-4xl'>$125,00</strong>
          </div>
          <div className='flex gap-4 h-[50px] w-full items-center '>
            <div className='flex items-center h-full rounded-2xl w-fit bg-zinc-200 '>
              <button
                onClick={decrementar}
                className='text-amber-500 text-3xl  h-full flex items-center justify-center w-12 rounded-2xl hover:bg-zinc-300 '
              >
                -
              </button>
              <span className='bg-zinc-200 text-3xl h-full flex items-center justify-center w-15 '>
                {quantidade}
              </span>
              <button
                onClick={incrementar}
                className='text-amber-500 text-3xl  h-full flex items-center justify-center w-12 rounded-2xl hover:bg-zinc-300'
              >
                +
              </button>
            </div>
            <button className='flex p-3 gap-5 font-bold bg-amber-500 rounded-2xl hover:bg-amber-600'>
              <ShoppingCart /> <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
