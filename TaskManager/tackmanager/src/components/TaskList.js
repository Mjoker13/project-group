import { Row, Col } from 'react-bootstrap';
import TaskItem from './TaskItem';
const TaskList = ({ tasks = [], onUpdateTask }) => {
  return (
    <Row className="gy-3">
      {tasks.map((task) => {
        return (
          <Col xs={12} key={task.id}>
            <TaskItem task={task} onUpdateTask={onUpdateTask} />
          </Col>
        );
      })}
    </Row>
  );
};
export default TaskList;
