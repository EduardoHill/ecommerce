import React from 'react'
import produto from '../images/produto.jpg'
import { Link } from 'react-router-dom'

export function Card() {
  return (
    <div className='flex flex-col items-center border border-zinc-600 rounded-2xl h-[400px] w-[300px] p-4 mt-4 gap-2'>
      <img
        src={produto}
        alt=''
        className=' bg-zinc-500 h-[300px] w-[300px]  rounded-2xl'
      />
      <div className='flex flex-col w-full'>
        <h1>Nome do produto</h1>
        <span>R$ 1000</span>
      </div>
      <Link
        to={'/details'}
        className=' flex items-center justify-center h-fit w-full rounded-2xl cursor-pointer hover:bg-amber-600 bg-amber-500'
      >
        Details
      </Link>
    </div>
  )
}
