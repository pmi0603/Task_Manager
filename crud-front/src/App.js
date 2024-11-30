import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import './App.css';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!title || !description) return alert('Title and Description required');
    try {
      const newTask = { title, description, completed: false };
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  };

  const updateTask = async () => {
    try {
      const updatedTask = { title, description, completed: false };
      await axios.put(`${API_URL}/${editId}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === editId ? { ...task, ...updatedTask } : task)));
      setTitle('');
      setDescription('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Task Manager</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />

        {editId ? (
          <button onClick={updateTask} className="button update-button">
            <Pencil size={20} /> Update Task
          </button>
        ) : (
          <button onClick={addTask} className="button add-button">
            <PlusCircle size={20} /> Add Task
          </button>
        )}
      </div>

      <div className="tasks-container">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
              <button onClick={() => startEdit(task)} className="icon-button edit-button">
                <Pencil size={20} />
              </button>
              <button onClick={() => deleteTask(task._id)} className="icon-button delete-button">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

