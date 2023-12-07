import React from 'react'
import {Navbar} from './Components/Navbar'
import {Main} from './Components/Main'
import { Sidebar } from './Components/Sidebar'

export const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <Main></Main>
      <Sidebar/>
    </div>
  )
}
