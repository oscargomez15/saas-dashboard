import React from 'react'
import '../Styles/Messages.css'
import joshua from "../Assets/joshua.jpg"
import sarah from "../Assets/sarah.jpg"
import layla from "../Assets/layla.jpg"
import darius from "../Assets/darius.jpg"

export const Messages = () => {

  const messagesContent = [{
    name:"Joshua Leming",
    image: joshua,
    message: "Are you ready for the meeting? It's about to start."
  },
  {
    name:"Sarah Stewart",
    image: sarah,
    message:"We need to finish the Saas Dashboard project before Friday."
  },{
    name:"Layla Morton",
    image:layla,
    message:"Hey how's the Crypto landing page going?"
  },{
    name:"Robert McCallister",
    image:darius,
    message:"The Dashboard is looking great! I know Joshua will love it."
  }]
  return (
    <section className='messages-container'>
        <h2>Recent Messages</h2>
        <div className="messages">
          {messagesContent.map(item => {
            return (
          <div className="messagebubble">
            <img src={item.image} alt={`${item.name}-picture`} />
            <div className="nameMessage">
              <h3>{item.name}</h3>
              <p>{item.message}</p>
            </div>
          </div>
            )
          })}
        </div>
    </section>
  )
}
