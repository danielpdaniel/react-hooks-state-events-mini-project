import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newTask, setNewTask] = useState({
    text: null,
    category: categories[1],
  })

  function handleChange(event){
    event.preventDefault();
   
    setNewTask({...newTask,
      [event.target.name]:event.target.value
    })
    // onTaskFormSubmit(newTask)

  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */
          categories.map(category =>
          category !== "All" ? <option key={category}>{category}</option> :
          null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
