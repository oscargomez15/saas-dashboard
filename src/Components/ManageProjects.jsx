import React, { useState } from 'react'
import '../Styles/ManageProjects.css'
import {Cards} from './Cards'

export const ManageProjects = () => {

  const cardsInfo = [{
    cardHeading:"Upcoming Projects",
    projectsNumber: Math.floor(Math.random () * 99),
    background: "orange"
  },{
    cardHeading:"In-Progress Projects",
    projectsNumber: Math.floor(Math.random () * 99),
    background:"purple"
  },{
    cardHeading:"Completed Projects",
    projectsNumber: Math.floor(Math.random () * 99),
    background:"blue"
  }]
  return (
    <section className='projects-section'>
        <div className="heading">
            <div className="title">
                <h1>Project Summary</h1>
                <p>Add new project and manage all of projects</p>
            </div>
        <button>+ Add a Project</button>
        </div>

        <div className='cards-container'>
          {cardsInfo.map((card,index) => {
            return (
              <div className={`${card.background} card`}>
              <div className="whitebox"></div>
              <div className="whitebox-behind"></div>
              <div className="projectsbox"></div>
              <h2>{card.projectsNumber}</h2>
              <h3>{card.cardHeading.substring(0, card.cardHeading.indexOf(' '))}<br/>{card.cardHeading.substring(card.cardHeading.indexOf(' ') + 1)} </h3>
          </div>)
          })}
        </div>
    </section>
  )
}
