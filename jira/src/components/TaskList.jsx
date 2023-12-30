// görevlerin listelendiği ve "Görevler"'in altında listenenler.
import '../App.css';
import TaskShow from "./TaskShow";


function TaskList({tasks, onDelete, onUpdate}) {
    // taskEleman, tasks içerisinde ki her bir elemana atanan isim
    return ( 
        <div className="task-list">
        {tasks.map((taskEleman, index)=> {
            return (
                <TaskShow key={index} taskProp={taskEleman} onDelete={onDelete} onUpdate={onUpdate}/>
            )
        })}
        </div>
     );
}

export default TaskList;