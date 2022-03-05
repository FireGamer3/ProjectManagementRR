import React from 'react'
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1 className='text-4xl text-center py-8 uppercase'>404 - Not Found!</h1>
            <Link to="/" className='bg-blue-600 p-3 rounded-md hover:bg-blue-400'>Return Home</Link>
        </div>
    )
}

export default NotFound