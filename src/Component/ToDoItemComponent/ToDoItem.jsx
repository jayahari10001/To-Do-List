import React from 'react';

function TodoItem({ task, editTask, removeTask, toggleCompletion }) {
    return (
        <div className="todo-item">
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={toggleCompletion}
            >
                {task.text}
            </span>
            <button onClick={editTask}>Edit</button>
            <button onClick={removeTask}>Remove</button>
        </div>
    );
}

export default TodoItem;
