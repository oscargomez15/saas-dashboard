import React from 'react'
import { Searchbar } from './Searchbar'
import { ManageProjects } from './ManageProjects'
import { Timeline } from './Timeline'
import '../Styles/Main.css'

export const Main = () => {
  return (
    <main>
        <Searchbar/>
        <ManageProjects/>
        <Timeline/>
    </main>
  )
}
