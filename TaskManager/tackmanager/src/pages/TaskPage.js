import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserById, putTask } from '../api';
import LoggedUser from '../components/LoggedUser';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  const loadUser = async () => {
    const result = await getUserById(userId);
    if (result.ok) {
      console.log(result.data);
      setUser(result.data);
      setTasks(result.data.tasks);
    } else {
      console.log(result.data);
    }
  };

  const updateTask = async (task, taskId) => {
    const result = await putTask(task, taskId, userId);
    if (result.ok) {
      loadUser();
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    loadUser();
  }, [userId]);

  return (
    <Container>
      <header>
        <div className="d-flex justify-content-end">
          <LoggedUser firstName={user.firstName} lastName={user.lastName} />
        </div>
        <h1>Tasks</h1>
        <Row>
          <Col xs={12} sm={6}>
            <h2>To do</h2>
            <TaskList
              tasks={tasks.filter((t) => !t.completed)}
              onUpdateTask={updateTask}
            />
          </Col>
          <Col xs={12} sm={6}>
            <h2>Completed</h2>
            <TaskList
              tasks={tasks.filter((t) => t.completed)}
              onUpdateTask={updateTask}
            />
          </Col>
        </Row>
      </header>
    </Container>
  );
};
export default TaskPage;
