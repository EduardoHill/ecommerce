export function Card() {
  return (
    <div className='flex flex-col border border-zinc-600 rounded-2xl h-[400px] w-[300px] p-4 mt-4'>
      <img src='' alt='' className=' bg-zinc-500' />
      <div>
        <h1>Nome do Projeto</h1>
        <span>R$ 1000</span>
      </div>
      <button>Details</button>
    </div>
  )
}
