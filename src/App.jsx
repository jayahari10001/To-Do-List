import React, { useState } from 'react';
import TodoList from './Component/ToDoListComponent/ToDoList';
import './Component/ToDoListComponent/ToDoList.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const editTask = (index) => {
        setIsEditing(true);
        setNewTask(tasks[index].text);
        setCurrentTaskIndex(index);
    };

    const updateTask = () => {
        const updatedTasks = tasks.map((task, index) =>
            index === currentTaskIndex ? { ...task, text: newTask } : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setNewTask('');
        setCurrentTaskIndex(null);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    };

    const toggleCompletion = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) =>
            taskIndex === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <div className="todo-container">
                <h1>Todo List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a task"
                    />
                    {isEditing ? (
                        <button onClick={updateTask}>Update Task</button>
                    ) : (
                        <button onClick={addTask}>Add Task</button>
                    )}
                </div>
                <TodoList
                    tasks={tasks}
                    editTask={editTask}
                    removeTask={removeTask}
                    toggleCompletion={toggleCompletion}
                />
            </div>
        </div>
    );
}

export default App;
