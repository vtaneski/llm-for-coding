import { useParams } from 'react-router-dom';

export default function TaskDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Task #{id}</h2>
      <p>This is the detail view for task ID {id}.</p>
    </div>
  );
}
