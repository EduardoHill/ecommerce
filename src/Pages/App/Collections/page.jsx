import React from 'react'
import { NavBar } from '../../../components/navBar'
import { Card } from '../../../components/Cards'

export function Collections() {
  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <div className=' max-w-7xl w-full gap-4 grid grid-cols-3 '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
