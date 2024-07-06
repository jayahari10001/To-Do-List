import React from 'react';
import TodoItem from '../ToDoItemComponent/ToDoItem.jsx';

function TodoList({ tasks, editTask, removeTask, toggleCompletion }) {
    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    editTask={() => editTask(index)}
                    removeTask={() => removeTask(index)}
                    toggleCompletion={() => toggleCompletion(index)}
                />
            ))}
        </div>
    );
}

export default TodoList;
