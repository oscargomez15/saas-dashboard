import React from 'react'
import '../Styles/Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

export const Searchbar = () => {
  return (
    <section className="searchbar-container">
        <div className="searchbar">
            <div className='icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <input type="text" placeholder='Search something here'/>
        </div>
        <button className="notifications">
            <FontAwesomeIcon icon={faBell}/>
        </button>
    </section>
  )
}
