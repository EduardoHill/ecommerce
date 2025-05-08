import React from 'react'
import { NavBar } from '../../../components/navBar'
import { Card } from '../../../components/Cards'

export function Home() {
  return (
    <div className=''>
      <NavBar />
      <div className=' max-w-7xl mx-auto w-full gap-4 grid grid-cols-3 '>
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
