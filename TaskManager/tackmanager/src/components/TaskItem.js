import './TaskItem.css';
import { Button, Card } from 'react-bootstrap';
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from 'react-icons/bs';

const TaskItem = ({ task, onUpdateTask }) => {
  const toggleCompleted = () => {
    // invertire l'attributo completed
    const updatedTask = { ...task, completed: !task.completed };
    console.log(updatedTask);
    // passare il task con l'attributo modificato alla put
    onUpdateTask(updatedTask, task.id);
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
          <BsClipboardCheck />
        </Button>
      </Card.Body>
      <Card.Footer>
        <BsFillTrashFill />
        <BsPencilFill />
      </Card.Footer>
    </Card>
  );
};
export default TaskItem;
