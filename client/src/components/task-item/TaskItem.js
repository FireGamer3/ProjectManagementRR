import React from 'react'
import { Link } from 'react-router-dom'

function TaskItem(props) {
    const task = props.task;

    let classes = "p-3 text-center rounded-md dark:shadow-gray-400 shadow-sm flex flex-row items-center flow-root";

    if (task.completed) {
        classes += " bg-green-600"
    } else classes += " bg-gray-600";

    return (
        <div className={classes}>
            <h2 className="text-2xl float-left">{task.title}</h2>
            <div className='flex flex-row float-right'>
                {task.completed ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> }
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default TaskItem