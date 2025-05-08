import React from 'react'
import { NavBar } from './components/navBar'
import { Card } from './components/Cards'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
