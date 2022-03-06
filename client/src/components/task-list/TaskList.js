import React, {useState} from 'react'
import TaskItem from '../task-item/TaskItem';

function TaskList(props) {
    const [tasks, setTasks] = useState(props.tasks);

    const toggleComplete = async (task) => {
        await fetch('http://localhost:3001/todos/' + task.id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo: { completed: !task.completed } })
        });
        const index = tasks.indexOf(task);
        let newTasks = [...tasks];
        newTasks[index].completed = !task.completed
        setTasks(newTasks);
    }

    const deleteTask = async (task) => {
        await fetch('http://localhost:3001/todos/' + task.id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const index = tasks.indexOf(task);
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div className='grid gap-6 sm:grid-cols-1 mt-3'>
            {tasks.map((item) => <div key={item.id}>
                <TaskItem task={item} onComplete={toggleComplete} onDelete={deleteTask} />
            </div>)}
        </div>
    )
}

export default TaskList