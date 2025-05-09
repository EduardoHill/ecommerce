import { Sidebar } from '../../components/Sidebar'
import avatar from '../../images/avatar.png'

export function UserPage() {
  return (
    <div className='flex  w-full'>
      <Sidebar />
      <div className=' w-[80%] flex flex-col items-center pt-20 gap-2 '>
        <img
          src={avatar}
          alt=''
          className=' border-amber-500 border-2 rounded-full w-[200px] h-fit'
        />
        <div className='flex flex-col items-center'>
          <h1>Nome</h1>
          <span>Eduardo Hill</span>
        </div>
        <div className='flex flex-col items-center'>
          <h1>E-mail</h1>
          <span>email@e.com.br</span>
        </div>
        <div className='flex flex-col items-center'>
          <h1>Endereço de cobrança</h1>
          <div className='bg-zinc-200 w-[500px] p-4 rounded-2xl'>
            <div className=' grid grid-cols-2 gap-1'>
              <div className='flex flex-col'>
                <h1 className='text-2x font-bold'>Rua</h1>
                <span className='text-zinc-900 w-full bg-zinc-300 px-2 '>
                  Sua rua aqui
                </span>
              </div>
              <div className='flex flex-col '>
                <h1 className='text-2x font-bold'>Cep</h1>
                <span className='text-zinc-900 w-full bg-zinc-300 px-2 '>
                  00.000.000
                </span>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <div className='flex flex-col'>
                <h1 className='text-2x font-bold'>Numero</h1>
                <span className='text-zinc-900  bg-zinc-300 px-2  '>519</span>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-2x font-bold'>Apto</h1>
                <span className='text-zinc-900  bg-zinc-300 px-2 '>103</span>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-2x font-bold'>Bairro</h1>
                <span className='text-zinc-900  bg-zinc-300 px-2 '>Centro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
