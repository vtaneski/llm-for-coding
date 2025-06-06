// src/App.jsx
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Content</h1>
      <hr />
      <Outlet />
    </div>
  );
}
