import React, {useState} from 'react'
import TaskItem from '../task-item/TaskItem';

function TaskList(props) {
    const [tasks, setTasks] = useState(props.tasks);

    //<ProjectItem key={item.id} project={item} />
    return (
        <div className='grid gap-6 sm:grid-cols-1 mt-3'>
            {tasks.map((item) => <div>
                <TaskItem key={item.id} task={item} />
            </div>)}
        </div>
    )
}

export default TaskList