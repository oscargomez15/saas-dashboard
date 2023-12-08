import React from 'react'
import '../Styles/Tasks.css'
export const Tasks = () => {
  return (
    <section className='task-container'>
        <div className="task-wrapper">
            <div className='task-title'>
                <h2>Today's Tasks</h2>
                <button className='addTask'> + </button>
            </div>
            <div className="taskbubble">
                <div className="taskdescription">
                    <h3>Meeting with Client</h3>
                    <input type='checkbox'/>
                </div>
                <h3 className='tasktime'>11:00AM - 12:00PM</h3>
            </div>
        </div>
    </section>
  )
}
