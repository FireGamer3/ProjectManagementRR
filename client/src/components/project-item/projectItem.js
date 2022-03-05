import React from 'react'

function ProjectItem(props) {
    const project = props.project;

    return (
        <div className='p-6 bg-gray-600 text-center
        rounded-md dark:shadow-gray-400 shadow-sm hover:shadow-md
        flex flex-col items-center'>
            <h2 className="uppercase text-2xl">#{project.id} {project.title}</h2>
        </div>
    )
}

export default ProjectItem