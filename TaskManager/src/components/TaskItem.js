import './TaskItem.css';
import { Button, Card } from 'react-bootstrap';
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from 'react-icons/bs';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const toggleCompleted = () => {
    // invertire l'attributo completed
    const updatedTask = { ...task, completed: !task.completed };
    console.log(updatedTask);
    // passare il task con l'attributo modificato alla put
    onUpdateTask(updatedTask, task.id);
  };

  const handleDeleteClick = () => {
    // chiedo conferma
    const confirm = window.confirm('Are you sure?');
    // eseguo la delete
    if (confirm) {
      onDeleteTask(task.id);
    }
  };

  return (
    <Card className="c_task">
      <Card.Body>
        <div>{task.taskContent}</div>
        <div>{task.deadline}</div>
        <Button
          variant="light"
          className="c_task-toggle"
          onClick={toggleCompleted}
        >
          {task.completed ? <BsClipboardX /> : <BsClipboardCheck />}
        </Button>
      </Card.Body>
      <Card.Footer>
        <Button variant="light" onClick={handleDeleteClick}>
          <BsFillTrashFill />
        </Button>
        <Button variant="light">
          <BsPencilFill />
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default TaskItem;
