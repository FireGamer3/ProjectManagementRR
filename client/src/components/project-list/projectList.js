import React, { useState, useEffect } from 'react'
import ProjectItem from '../project-item/projectItem';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('http://localhost:3001/projects');
                const json = await resp.json();
                setProjects(json);
                setLoaded(1);
            } catch (error) {
                console.error(error);
            }
        }

        if (loaded === 0) {
            setLoaded(1);
            fetchData();
        }
    }, [projects, loaded]);


    return (
        <div className='grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3'>
            {projects.map((item) => <ProjectItem key={item.id} project={item} />)}
        </div>
    )
}

export default ProjectList