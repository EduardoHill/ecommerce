import { NavBar } from '../../../components/navBar'
import equipe from '../../../images/equipe.png'
import { Package, Phone, TruckElectric, Verified } from 'lucide-react'
export function About() {
  return (
    <div className='flex flex-col gap-5'>
      <NavBar />
      <div className='max-w-7xl mx-auto w-full flex flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <h1 className='flex text-6xl justify-center'>Quem somos?</h1>
          <p className='flex'>
            "A SneakersHub é uma loja online especializada em tênis autênticos,
            trazendo as últimas tendências com conforto e estilo para todas as
            ocasiões."
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='flex text-6xl justify-center'>Nossa Historia</h1>
          <p>
            Fundada em 2022 por apaixonados por cultura sneaker, a SneakersHub
            nasceu da vontade de facilitar o acesso a modelos originais, com
            entrega rápida e atendimento transparente."
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='flex text-6xl justify-center'>O que nos diferencia</h1>
          <ul className='flex flex-col gap-7'>
            <li className='flex gap-2'>
              Envio rapido e seguro
              <TruckElectric />
            </li>
            <li className='flex gap-2'>
              Produtos 100% originais <Verified />
            </li>
            <li className='flex gap-2'>
              Atendimento personalizado <Phone />
            </li>
            <li className='flex gap-2'>
              Garantia de devolução <Package />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
