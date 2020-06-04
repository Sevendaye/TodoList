import React from 'react';
import ToDo from './ToDo';

const TodoList = ({ tasks }) => (
    <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            {
                tasks.map((task) => <ToDo tasks={task} key={task.id} />)
            }
        </ul>
    </>
)

export default TodoList;