import Footer from './components/Footer';
import Header from './components/Header';

import styles from "./App.module.css"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { ITask } from './interfaces/Task';
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>o que vc vai fazer</h2>
          <TaskForm btnText='criar tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />      
    </div>
  );
}

export default App;
