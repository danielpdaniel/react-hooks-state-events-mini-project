import React, {useState} from "react";
import Task from "./Task";


function TaskList({ tasks, selectedCategory, }) {
  // tasks.forEach(task => console.log(task.category))
  const filteredTasks = tasks.filter(task => task.category === selectedCategory)

  // const [filteredTasks, setFilteredTasks] = useState(tasks)
  // tasks.forEach(task => console.log(task.category))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */

      // tasks.map(task => <Task key={task.text} category={task.category} text={task.text} />)
      
      selectedCategory ?
      filteredTasks.map(task => <Task key={task.text} category={task.category} text={task.text} />)
      : tasks.map(task => <Task key={task.text} category={task.category} text={task.text} />)
    }
    </div>
  );
}

export default TaskList;
