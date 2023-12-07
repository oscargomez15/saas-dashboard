import React from 'react'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCalendar, faGear, faGrip, faFolder, faUserGroup, faCompass, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Rayca from "../Assets/Rayca-Logo-1.png"

export const Navbar = () => {
  return (
    <nav>
        <img src={Rayca} alt="rayca-logo" />
        <ul>
            <li>
              <a href="#"><FontAwesomeIcon icon={faGrip}/>Overview</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faFolder}/>Project</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faCompass}/>Activity </a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faCommentDots}/>Messages</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faUserGroup}/>Members</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faCalendar}/>Calendars</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faGear}/>Settings</a>
              </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faCircleExclamation}/>New Update</a>
            <div id="tooltip">
              <div className="notif">
                <span>2</span>
              </div>
              <span className="tooltipText"> You have new features available today!
              <button className='tooltip-btn'>Update Now</button>
              </span>
            </div>
            </li>
        </ul>
    </nav>
  )
}
