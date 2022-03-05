import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProjectDetail() {
    let nav = useNavigate();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('http://localhost:3001/projects/' + id);
                const json = await resp.json();
                if(json.status == null){
                    setProject(json);
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
    }, [loading, id]);

    let todoCount = 0;
    let complete = 0;

    console.log(project);
    if(!loading && project != null){
        todoCount = project.todos.length ?? 0;
        complete = project.todos.filter(p => p.completed).length ?? 0;
    }

    return (
        <div>
            {loading ? <h1 className='text-4xl text-center py-8 uppercase'>Loading...</h1> :
                <div>
                    <h1 className='text-4xl text-center py-8 uppercase'>#{project.id} - {project.title}</h1>
                    <p className='text-2xl text-center py-8 uppercase'>{complete}/{todoCount} Tasks Completed</p>
                </div>
            }
        </div>
    )
}

export default ProjectDetail