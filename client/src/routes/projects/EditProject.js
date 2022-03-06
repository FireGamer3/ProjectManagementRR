import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditProject() {
    let nav = useNavigate();
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('http://localhost:3001/projects/' + id);
                const json = await resp.json();
                if (json.status == null) {
                    setTitle(json.title);
                    setLoading(false);  
                } else {
                    nav("/NotFound");
                }
            } catch (error) {
            }
        }

        if (loading) {
            fetchData();
        }
    }, [loading, id, nav]);

    const EditProjectDetails = async (event) => {
        event.preventDefault();
        if(title === ""){
            setError("Title must be filled out!");
        }else{
            try {
                await fetch('http://localhost:3001/projects/' + id, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ project: { title } })
                });
                nav('/');
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div>
            <h1 className='text-4xl text-center py-8 uppercase'>Edit Project</h1>
            <form onSubmit={EditProjectDetails}>
                {error ? <p className='bg-red-600'>{error}</p> : <></>}
                <input type="text" className="w-full rounded-md text-lg p-4 border-2 border-gray-200 dark:bg-gray-600" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit' className='bg-blue-600 p-3 rounded-md hover:bg-blue-400 mt-3 w-full'>Edit</button>
            </form>
        </div>
    )
}

export default EditProject