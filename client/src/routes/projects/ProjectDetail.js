import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import TaskList from '../../components/task-list/TaskList';

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
    }, [loading, id, nav]);

    return (
        <div>
            {loading ? <h1 className='text-4xl text-center py-8 uppercase'>Loading...</h1> :
                <div>
                    <h1 className='text-4xl text-center py-8 uppercase'>#{project.id} - {project.title}</h1>
                    <div className='m-9'>
                        <Link to={'/newTask/' + project.id} className='bg-blue-600 p-3 rounded-md hover:bg-blue-400'>New Task</Link>
                    </div>
                    <TaskList tasks={project.todos} />
                </div>
            }
        </div>
    )
}

export default ProjectDetail