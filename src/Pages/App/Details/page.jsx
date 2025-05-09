import { ShoppingCart } from 'lucide-react'
import { NavBar } from '../../../components/navBar'
import produto from '../../../images/produto.jpg'
export function Details() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='flex  max-w-7xl mx-auto w-full p-10 gap-10'>
        <div>
          <img
            src={produto}
            alt=''
            className='w-[600px] h-[500px] rounded-2xl'
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-7'>
            <span>SNEAKER COMPANY</span>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile Sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'ill withstand
              everything the weather can offer
            </p>
            <strong>$125,00</strong>
          </div>
          <div>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <button>
              <ShoppingCart /> <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
