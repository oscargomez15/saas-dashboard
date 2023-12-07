import React, { useEffect, useRef } from 'react'
import '../Styles/Cards.css'

export const Cards = ({title, projects, background, index}) => {
  const cardRef = useRef();
  return (
    <div className="card" ref={cardRef}>
        <div className="whitebox"></div>
        <div className="whitebox-behind"></div>
        <h2>{projects}</h2>
        <h3>{title.substring(0, title.indexOf(' '))}<br/>{title.substring(title.indexOf(' ') + 1)} </h3>
    </div>
  )
}
