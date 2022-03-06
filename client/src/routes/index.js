import React from 'react'
import ProjectList from '../components/project-list/projectList'
import { Link } from "react-router-dom"

function Index() {
    return (
        <div>
            <h1 className='text-4xl text-center py-8 uppercase'>All Projects</h1>
            <div className='m-9'>
                <Link to="/newProject" className='bg-blue-600 p-3 rounded-md hover:bg-blue-400'>New Project</Link>
            </div>
            <ProjectList />
        </div>
    )
}

export default Index