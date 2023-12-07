import React from 'react'
import {Messages} from "./Messages"
import '../Styles/Sidebar.css'
import joshua from "../Assets/joshua.jpg"
import sarah from "../Assets/sarah.jpg"
import layla from "../Assets/layla.jpg"
import darius from "../Assets/darius.jpg"

export const Sidebar = () => {
  const membersPictures = [joshua,sarah,layla,darius]
  return (
    <aside>
        <Messages/>
        <div className="team-members">
          <div className="team-members-title">
            <h2>Team Members</h2>
            <h3><a href="#">See all</a></h3>
          </div>
          <div className="picture-container">
            {membersPictures.map(image => {
              return(
                <img src={image} alt="" className='team-member-picture' />
              )
            })}
          </div>
        </div>
    </aside>
  )
}
