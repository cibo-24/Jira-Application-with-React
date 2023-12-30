import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  // createTask içerisine gönderilen değerleri array'e atamak için,
  const [tasks, setTasks] = useState([]);

  // TaskCreate'de props'tan gelen title değeri, title'da, taskDesc değeri ise taskDesc'de tutulur.
  const createdTasks = (title,taskDesc) => {
    // createdTasks içerisne ...tasks'ın içerisinde ki tüm değerleri geçirdik.
    const createdTasks = [
      // ...tasks ile verileri aldıktan sonra ,{} açmak verilerin yanına yeni bir veri eklemeye yarar.
      ...tasks, {
        id: Math.round(Math.random()*999999), // id değeri yarattık
        title: title, // value değeri, title'da tutulan değer
        taskDesc: taskDesc,
      }
    ];
    // yukarıda oluşturulmuş ...tasks (title ve taskDesc) - 2 eleman ve bizim oluşturduğumuz elemanla birlikte 3 elemanı setTask içerisine atadık.    
    setTasks(createdTasks);

  };

  // onDelete props'unun func'ını
  const deleteTaskById = (id) =>  {

   const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;

    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {id, title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task;
    });
    setTasks(updatedTask);
  }

  return (
    <div className='App'>
    <TaskCreate onCreate={createdTasks}/>
    <h2 className='duty'>Görevler</h2>
    <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
    
    
  );
}

export default App;