import React from 'react'

function ProjectItem(props) {
    const project = props.project;

    let classes = "p-6 text-center rounded-md dark:shadow-gray-400 shadow-sm hover:shadow-md flex flex-col items-center";
    
    let todoCount = project.todos.length;
    let complete = project.todos.filter(p => p.completed).length;
    
    if (todoCount === complete){
        classes += " bg-green-600"
    } else classes += " bg-gray-600";

    return (
        <div className={classes}>
            <h2 className="uppercase text-2xl">#{project.id} {project.title}</h2>
            <p>{complete}/{todoCount} tasks complete</p>
        </div>
    )
}

export default ProjectItem