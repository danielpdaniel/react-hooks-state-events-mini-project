import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
console.log(TASKS)
const [selectedCategory, setSelectedCategory] = useState(false)
const [tasks, setTasks] = useState(TASKS)

  function onBtnClick(category){
    category === "All" ?
    setSelectedCategory(false)
    : setSelectedCategory(category)
  }

  function onTaskFormSubmit(obj){
    console.log(obj)
    setTasks([...TASKS, obj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onBtnClick={onBtnClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onTaskFormSubmit={onTaskFormSubmit}/>
    </div>
  );
}

export default App;
