import { Status } from '../../../components/CardStatus'
import { Sidebar } from '../../../components/Sidebar'

export function Compras() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col gap-3 p-4 max-h-screen'>
        <h1 className='text-3xl font-medium'>Suas compras em andamento</h1>
        <div className='grid p-8 gap-6 h-full'>
          <Status />
          <Status />
          <Status />
          <Status />
        </div>
      </div>
    </div>
  )
}
