import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setInProgressTasks([...inProgressTasks, newTask]);
    setNewTask('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const moveToCompleted = (index) => {
    const updatedInProgressTasks = [...inProgressTasks];
    const completedTask = updatedInProgressTasks.splice(index, 1)[0];
    setInProgressTasks(updatedInProgressTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const removeTask = (index, isCompletedTask) => {
    if (isCompletedTask) {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedInProgressTasks = [...inProgressTasks];
      updatedInProgressTasks.splice(index, 1);
      setInProgressTasks(updatedInProgressTasks);
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="sections">
        <div className="section">
          <h2>In Progress</h2>
          <ul>
            {inProgressTasks.map((task, index) => (
              <li key={index} className="task" onClick={() => moveToCompleted(index)}>
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Completed</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} className="task" onClick={() => removeTask(index, true)}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
