import { NavBar } from '../../../components/navBar'

export function About() {
  return (
    <div className='flex flex-col gap-5'>
      <NavBar />
      <div className='max-w-7xl mx-auto w-full'>
        <div>
          <h1>Quem somos?</h1>
          <p>
            "A SneakersHub é uma loja online especializada em tênis autênticos,
            trazendo as últimas tendências com conforto e estilo para todas as
            ocasiões."
          </p>
        </div>
        <div>
          <h1>Nossa Historia</h1>
          <p>
            Fundada em 2022 por apaixonados por cultura sneaker, a SneakersHub
            nasceu da vontade de facilitar o acesso a modelos originais, com
            entrega rápida e atendimento transparente."
          </p>
        </div>
        <div>
          <h1>O que nos diferencia</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
