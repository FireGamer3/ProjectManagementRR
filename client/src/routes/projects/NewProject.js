import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewProject() {
    let nav = useNavigate();
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const CreateNewProject = async (event) => {
        event.preventDefault();
        if(title === ""){
            setError("Title must be filled out!");
        }else{
            try {
                const rawResponse = await fetch('http://localhost:3001/projects/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ project: { title } })
                });
                const content = await rawResponse.json();
                nav('/project/' + content.id);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div>
            <h1 className='text-4xl text-center py-8 uppercase'>New Project</h1>
            <form onSubmit={CreateNewProject}>
                {error ? <p className='bg-red-600'>{error}</p> : <></>}
                <input type="text" className="w-full rounded-md text-lg p-4 border-2 border-gray-200 dark:bg-gray-600" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit' className='bg-blue-600 p-3 rounded-md hover:bg-blue-400 mt-3 w-full'>Create</button>
            </form>
        </div>
    )
}

export default NewProject