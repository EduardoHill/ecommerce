import { Mail } from 'lucide-react'
import { NavBar } from '../../../components/navBar'

export function Contact() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='max-w-7xl mx-auto w-full pt-6 flex flex-col gap-3'>
        <h1 className='text-4xl'>Teve algum problema?</h1>
        <p className='text-zinc-600'>
          Abaixo tera uma area de contato,escreva pra gente seu problema
          detalhadamente que em ate 7 dias uteis entraremos em contato pelo
          E-mail fornecido!
        </p>
      </div>

      <div className='max-w-7xl mx-auto w-full flex flex-col justify-center items-center h-screen mt-[-150px] '>
        <div className=' w-3xl gap-6 h-[250px] flex rounded-2xl bg-zinc-100 p-4'>
          <div className='flex flex-col w-1/2 h-full'>
            <label className=' border-b border-zinc-300 font-bold'>
              Descreva seu Problema
            </label>
            <textarea
              className=' resize-none border border-zinc-300 h-full px-3 pt-2 outline-zinc-400'
              name='e-mail'
            ></textarea>
          </div>
          <div className='flex flex-col w-1/2 h-full   gap-6 '>
            <div className='flex flex-col gap-3'>
              <label className='border-b border-amber-300 font-bold'>
                Nome
              </label>
              <input
                type='text'
                className='border border-zinc-300 outline-zinc-400'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label className='border-b border-amber-300 font-bold'>
                E-mail
              </label>
              <input
                type='email'
                className='border border-zinc-300 outline-zinc-400'
              />
            </div>
            <button className='flex mt-auto items-center justify-center p-3 gap-5 font-bold bg-amber-500 rounded-2xl hover:bg-amber-600'>
              Enviar <Mail />
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto w-fitt mt-[-200px] '>
        <div className=' w-fit'>
          <div className='flex flex-col gap-2 '>
            <h1 className='flex w-full '>Outros contatos</h1>
            <ul className=' list-disc px-7 marker:text-amber-600'>
              <li>(32) 99999-9999</li>
              <li> (32) 99999-9999</li>
              <li>email.vendas@e.com.br</li>
              <li>email.rh@e.com.br</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
