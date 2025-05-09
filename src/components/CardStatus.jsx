import { Car, GitCommitHorizontal, House, Package } from 'lucide-react'

export function Status() {
  return (
    <div className='flex flex-col w-2xl bg-zinc-300 rounded-2xl p-3 gap-4'>
      <h1 className='text-2xl font-bold'>Compra id</h1>
      <div className='flex justify-center w-full'>
        <Package size={50} />
        <GitCommitHorizontal size={50} />
        <GitCommitHorizontal size={50} />
        <GitCommitHorizontal size={50} />
        <Car size={50} />
        <GitCommitHorizontal size={50} />
        <GitCommitHorizontal size={50} />
        <GitCommitHorizontal size={50} />
        <House size={50} />
      </div>
      <div className='flex items-center justify-center'>
        <button className='flex items-center justify-center h-fit w-fit py-2 px-5  rounded-2xl cursor-pointer hover:bg-amber-600 bg-amber-500 font-bold'>
          Saiba mais
        </button>
      </div>
    </div>
  )
}
