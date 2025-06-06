import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';

export default function Body() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', description: 'Study useState and useEffect' },
    { id: 2, title: 'Build Project', description: 'Make a todo app' }
  ]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>

      <h3>Add New Task</h3>
      <AddTask onAdd={handleAddTask} />
    </div>
  );
}
