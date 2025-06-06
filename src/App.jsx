// src/App.jsx
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
