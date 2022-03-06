import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function ProjectItem(props) {
    let nav = useNavigate();
    const project = props.project;

    let classes = "p-6 text-center rounded-md dark:shadow-gray-400 shadow-sm hover:shadow-md flex flex-col items-center";
    
    let todoCount = project.todos.length;
    let complete = project.todos.filter(p => p.completed).length;
    
    if (todoCount === complete && todoCount !== 0){
        classes += " bg-green-600"
    } else classes += " bg-gray-600";

    const EditProject = (event) => {
        event.preventDefault();
        nav('/editProject/' + project.id);
    }

    return (
        <Link className={classes} to={'/project/' + project.id}>
            <h2 className="uppercase text-2xl">#{project.id} {project.title}</h2>
            <p>{complete}/{todoCount} tasks complete</p>
            <div className='flex flex-row'>
                <button onClick={EditProject} ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg></button>
                <button onClick={(e) => props.onDelete(e, project)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg></button>
            </div>
        </Link>
    )
}

export default ProjectItem